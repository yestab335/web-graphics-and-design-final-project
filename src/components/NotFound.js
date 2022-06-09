import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import spaceVideo from '../assets/spaceError.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Error 404.</h1>
        <p>Looks Like This Page Doesn't Exist.</p>
        <div>
          <Link to='/' className='btn'>Return Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Video
