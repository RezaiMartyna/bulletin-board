import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPostById, fetchSinglePost } from '../../../redux/postsRedux.js';
import { isLogged } from '../../../redux/authRedux';

import styles from './Post.module.scss';


const Component = ({ className, post, match, isLogged, fetchSinglePost }) => {

  useEffect(() => {
    fetchSinglePost(match.params.id);
  }, []);

  if (post) {

    return (
      <div className={clsx(className, styles.root)}>

        <div className={styles.card}>
          <Card key={post._id} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="picture"
                height="140"
                image={post.photo}
                title="picture"
                className={styles.cardMedia}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.content}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  {`price: $${post.price}`}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  {`telephone: ${post.phone}`}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  {`date of published: ${post.date}`}
                </Typography>
              </CardContent>
            </CardActionArea>

            {isLogged &&

              <CardActions>
                <Button size="small" color="primary" href={`/post/${post._id}/edit`}>
                  Edit
                </Button>
              </CardActions>
            }
          </Card>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        Loading....
      </div>
    );
  }
};

Component.propTypes = {
  className: PropTypes.string,
  post: PropTypes.array,
  isLogged: PropTypes.bool,
  fetchSinglePost: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

const mapStateToProps = (state, props) => ({
  isLogged: isLogged(state),
  post: getPostById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  fetchSinglePost: postId => dispatch(fetchSinglePost(postId)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
