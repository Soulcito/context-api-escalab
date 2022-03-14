import React, { useContext } from 'react';
import { SongsContext } from '../../contexts/SongsContext';
import Message from '../Common/Message';
import ProgressBar from '../Common/ProgressBar';
import SearchTracks from './SearchTracks';
import Tracks from './Tracks';


const Songs = () => {
  
  const { doneFetch, text, tracks, validateQTrack } = useContext(SongsContext);
  
  return (
    <>
      <SearchTracks validateQTrack = { validateQTrack }/>
      {
        doneFetch ? 
         (tracks.length ? <Tracks text={text} tracks={tracks}/> : <Message text={text}/>)
         :
         <ProgressBar />
      }
    </>
  )
}

export default Songs;