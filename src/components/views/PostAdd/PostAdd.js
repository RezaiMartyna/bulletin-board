import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Axios from 'axios';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged } from '../../../redux/authRedux';


import styles from './PostAdd.module.scss';

const Component = ({ className, isLogged }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, event);
    Axios.post('http://localhost:8000/api/posts', {
      title,
      text,
      photo,
      price,
      phone,
    });
  };

  if (isLogged) {
    return (
      <div className={clsx(className, styles.root)}>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2 className={styles.title}>Add new post</h2>
          <TextField className={styles.formField} required id="title" label="title" value={title} onChange= {(e)=>setTitle(e.target.value)}/>
          <TextField className={styles.formField} required id="price" label="price" type="number" value={price} onChange= {(e)=>setPrice(e.target.value)}/>
          <TextField className={styles.content} required id="text" label="text" multiline rows="10" variant="outlined" value={text} onChange= {(e)=>setText(e.target.value)} />
          <TextField className={styles.formField} required id="telephone" type="number" label="telephone number" value={phone} onChange= {(e)=>setPhone(e.target.value)} />

          <input accept="image/*" id="icon-button-file" type="file" value={photo} onChange= {(e)=>setPhoto(e.target.value)}  />
          <label htmlFor="icon-button-file">
            <IconButton className={styles.addPhoto} color="primary" aria-label="upload picture" component="span" >
              <PhotoCamera />
            </IconButton>
          </label>


          <Button variant="contained" color="primary" component="button" type="submit" >
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
