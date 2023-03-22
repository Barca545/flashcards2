import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Url } from 'url';
import './video-notes.css'

export default function YouTubeNotes(props:any){
  if (!props.show) {return null }
  return(
    <div className='row'>
    <div className='column'>
    <iframe 
      className='yt-frame'
      src={`${props.videoId}`}
      width="853"
      height="480"
      allowFullScreen/>
    </div>
    <div className='column'>
      <input type={'text'}></input>
    </div>
  </div>
)
}