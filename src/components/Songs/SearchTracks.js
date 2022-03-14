import React from 'react';
import { IconButton, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchTracks = ({validateQTrack}) => (
  <Paper className='paper defaultPaper'>
     <TextField
        id="q_track"
        label="Track"
        margin='normal'
        variant='outlined'
        onKeyPress={ e => validateQTrack(e) }
     /> 
     <IconButton onClick={ e => validateQTrack(e)}>
       <SearchIcon/> 
     </IconButton>
  </Paper>
)

export default SearchTracks