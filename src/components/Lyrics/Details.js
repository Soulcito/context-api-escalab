import React from 'react';
import { Paper } from '@material-ui/core';


const Details = ({ track, lyrics }) => {

  const { track_name, artist_name, album_id, primary_genres, explicit, updated_time } = track;
  const { music_genre_list } = primary_genres;
  const { music_genre_name } = music_genre_list.length && music_genre_list[0].music_genre; 
  const realease_date = typeof updated_time === 'string' ? new Date(updated_time).toDateString() : 'Invalid Date';
  const lyricsParagraphs = lyrics.split('\n');
  lyricsParagraphs.splice(lyricsParagraphs.length -3, 3);

  return (
    <div>Details</div>
  )
}

export default Details