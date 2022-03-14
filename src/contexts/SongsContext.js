import React, { createContext, useState, useEffect } from 'react';
import { chartTracksGet, trackSearch } from '../constants';

// paso 1
export const SongsContext = createContext();

const SongsContextProvider = ({children}) => {

  // estados -> useState

  const [doneFetch, setDoneFetch] = useState();
  const [currentQTrack, setCurrentQTrack] = useState('');
  const [text, setText] = useState('Top Songs');
  const [tracks, setTracks] = useState([]);

  // ciclos de vida -> useEffect

  useEffect(() => {
    getTopTracks();
  }, [])
  

  // funciones logicas

  const getTopTracks = () => {
    fetch(chartTracksGet())
       .then( res => res.json())
       .then( data => {
           setDoneFetch(true);
           setTracks(data.message.body.track_list);
       })
       .catch(err => console.log(err));
  };

  const getTracks = q_track => {
    fetch(trackSearch(q_track))
      .then( res => res.json())
      .then( data => {
        const { track_list } = data.message.body;
        setDoneFetch(true);
        setText(track_list.length ? 'Results' : 'No Results');
        setTracks(track_list);
      })
      .catch( err => console.log(err));
  };

  const validateQTrack = (e, q_track = document.querySelector('#q_track').value.toLowerCase().trim()) => {
    if ( e.type === 'keypress' && e.key !== 'Enter' ) return;
    const words = q_track.match(/\w+/g);
    q_track = words && words.join(" ");
    if ( q_track && q_track !== currentQTrack ) {
      setCurrentQTrack(q_track);
      setDoneFetch(false);
      getTracks(q_track);
    }
  };

  // paso 2
  return (
    <SongsContext.Provider value={{ doneFetch, text, tracks, validateQTrack }}>
      { children }
    </SongsContext.Provider>
  )
}

export default SongsContextProvider;