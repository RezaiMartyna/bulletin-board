import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged } from '../../../redux/authRedux';

import styles from './PostAdd.module.scss';

const Component = ({ className, isLogged}) => {
  if (isLogged) {
    return (
      <div className={clsx(className, styles.root)}>
        
        <form autoComplete="off">
          <h2 className={styles.title}>Add new post</h2>
          <TextField className={styles.formField} required id="title" label="title" />
          <TextField className={styles.formField} required id="price" label="price" type="number" />
          <TextField className={styles.content} required id="content" label="content" multiline rows="10" variant="outlined" />
          <TextField className={styles.formField} required id="email" type="email" label="email" />
          <TextField className={styles.formField} required id="telephone" type="number" label="telephone number" />
    
          <input accept="image/*" id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton className={styles.addPhoto} color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
      
        
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );

  }

  else {
    return (
      <div>
        You need to be Log-in 
      </div>
    );
  }
  
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: isLogged(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);


export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
