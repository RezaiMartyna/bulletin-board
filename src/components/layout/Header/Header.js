import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged } from '../../../redux/authRedux';

import styles from './Header.module.scss';

const Component = ({ className, isLogged }) => {
  if (isLogged) {
    return (
      <div className={clsx(className, styles.root)}>
        <Button className={styles.button} variant="contained" color="primary" href="/">
          Logout
        </Button>

        <Button className={styles.button} variant="contained" color="primary" href="">
          My ads
        </Button>
      </div>
    );
  }
  else {
    return (
      <div className={clsx(className, styles.root)}>
        <Button className={styles.button} variant="contained" color="primary" href="https://google.com">
          Login with Google
        </Button>
      </div>
    );
  }
};

Component.propTypes = {
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
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
