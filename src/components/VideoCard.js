import React from 'react'
import './VideoCard.css'

function VideoCard() {
  return (
    <div className='video-container'>
      <iframe title='let there be change'
        src="https://www.youtube.com/embed/8pzwmR1tyyk?autoplay=1&mute=1&loop=1">
      </iframe>
    </div>
  )
}

export default VideoCard
