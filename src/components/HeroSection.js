import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useSpring, animated } from 'react-spring';

function HeroSection() {
  const props = useSpring({ to: { opacity: 0.8, marginRight: 0 }, from: { opacity: 0, marginRight: -500 }, delay: 800 })
    return (
        <div className='hero-container'>
          <video src={require('../videos/video-3.mp4').default}  autoPlay loop muted />
          <animated.img src={require("../images/logo.png").default} alt="Flowers" style={props} />
          <p>LET THERE BE CHANGE</p>
          <div className="hero-btns">
            <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
              >WATCH TRAILER <i className="far fa-play-circle"  />
            </Button>
          </div>
        </div>
    )
} 

export default HeroSection
