import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import logo from './../../assets/img/logo.png';

const Header = () => (
  <AppBar position='sticky'>
    <Toolbar>
       <img src={logo} alt="logo" width="35" height="35"></img>
       &nbsp;&nbsp;
       <h1>Lyric Finder App</h1>
    </Toolbar>
  </AppBar>
)

export default Header