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

import styles from './Homepage.module.scss';

const Component = ({ className, posts, isLogged }) => (
  <div className={clsx(className, styles.root)}>
    {isLogged && 
    <Button variant="contained" color="primary" href="/post/add">
      Add new
    </Button>
    }
    <div className={styles.cards}>
      {posts.map(post => (
        <Card className={styles.card} key={post.id} variant="outlined"  >
          <CardActionArea>
            <CardMedia className={styles.cardMedia} component="img" alt="picture" height="140" image={post.image} title="picture" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                {`price: $${post.price}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href={`/post/${post.id}`}>
              Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogged: isLogged(state), 
});

//const mapDispatchToProps = dispatch => ({
// someAction: arg => dispatch(reduxActionCreator(arg)),
//});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
