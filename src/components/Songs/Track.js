import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import track from './../../assets/img/track.png';
import album from './../../assets/img/album.png';
import ButtonPrimary from '../Common/ButtonPrimary';


const Track = ({ commontrack_id, track_name, album_name, artist_name }) => (
  <Grid item xs={ 12 } sm={ 6 }>
    <Paper className='defaultPaper'>
       <h3>{ artist_name }</h3>
       <ul>
         <li>
           <img src={track} alt="track" />
           <strong>Track: </strong>
           <span>{ track_name }</span>
         </li>
         <li>
           <img src={album} alt="album" />
           <strong>Album: </strong>
           <span>{ album_name }</span>
         </li>         
         <li>
           <ButtonPrimary type="lyrics" to={`/lyrics/track/${commontrack_id}`}/>
         </li>
       </ul>
    </Paper>
  </Grid>
)

export default Track