import React, { Fragment, useContext } from 'react';
import { LyricsContext } from '../../contexts/LyricsContext';
import ButtonPrimary from '../Common/ButtonPrimary';
import Message from '../Common/Message';
import ProgressBar from '../Common/ProgressBar';
import Details from './Details';


const Lyrics = () => {
  
  const {doneFetchTracks, doneFetchLyrics, track, lyrics} = useContext(LyricsContext);
  
  return (
    <Fragment>
     {
        doneFetchTracks && doneFetchLyrics ? 
          (!Array.isArray(track) && !Array.isArray(lyrics)) ? 
             <Details track={ track } lyrics={ lyrics }/>
           : <Message text="No Results"/>
        : <ProgressBar />   
     }
     <ButtonPrimary  type="back" to="/"/>
    </Fragment>
  )
}

export default Lyrics;