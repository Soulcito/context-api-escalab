import React from 'react';
import { Grid } from '@material-ui/core';
import Track from './Track';
import Message from '../Common/Message';

const Tracks = ({ tracks, text }) => (
  <>
    <Message text={text}/>
    <div className='root'>
      <Grid container spacing={ 3 } justifyContent="center">
         {
           tracks.map( track => {
             const {
                commontrack_id,
                track_name,
                album_name,
                artist_name
             } = track.track;
             return (
               <Track 
                  key={ commontrack_id }
                  commontrack_id={commontrack_id}
                  track_name={track_name}
                  album_name={album_name}
                  artist_name={artist_name}
               />
             )
           })
         }
      </Grid>
    </div>      
  </>
)

export default Tracks