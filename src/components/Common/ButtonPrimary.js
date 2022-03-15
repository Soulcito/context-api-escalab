
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import lyrics from './../../assets/img/lyrics.png';
import back from './../../assets/img/back.png';

const ButtonPrimary = ({ type, to }) => (
  <Link className='buttonPrimary' to={ to }>
    <Button variant='contained' color='primary'>
      <img src={ type === "lyrics" ? lyrics : back } alt={ type === "lyrics" ? "lyrics" : "back" } />
      { type === 'lyrics' ? 'Lyrics' : 'Go Back' }
    </Button>
  </Link>
)

export default ButtonPrimary