import React from 'react';
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
import { getAll } from '../../../redux/postsRedux.js';
import { isLogged } from '../../../redux/authRedux';

import styles from './Post.module.scss';

const Component = ({ className, posts, match, isLogged }) => (
  <div className={clsx(className, styles.root)}>

    <div className={styles.card}>
      <Card key={posts[match.params.id - 1].id} variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="picture"
            height="140"
            image={posts[match.params.id - 1].image}
            title="picture"
            className={styles.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {posts[match.params.id - 1].title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {posts[match.params.id - 1].content}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              {`price: $${posts[match.params.id - 1].price}`}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              {`email: ${posts[match.params.id - 1].email}`}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              {`telephone: ${posts[match.params.id - 1].telephone}`}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              {`date of published: ${posts[match.params.id - 1].date}`}
            </Typography>
          </CardContent>
        </CardActionArea>

        {isLogged &&

        <CardActions>
          <Button size="small" color="primary" href={`/post/${posts[match.params.id - 1].id}/edit`}>
            Edit
          </Button>
        </CardActions>
        }
      </Card>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  isLogged: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogged: isLogged(state),

});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
