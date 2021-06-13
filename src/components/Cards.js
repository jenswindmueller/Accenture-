import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useSpring, animated } from 'react-spring';

function Cards() {
  const props = useSpring({ 
    to: { opacity: 1, margintop: 0 }, 
    from: { opacity: 0, margintop: -100 }, 
    delay: 900, 
    threshold: 0.3
  })

  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const animation = useAnimation()

  useEffect(() =>{
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2
        }
      })
    } else {
      animation.start({x: '-100vw'})
    }
  })
  
  return (
    <div className="cards" ref={ref}>
      <animated.h1 style={props}>Services</animated.h1>
      <div className="cards__container">
        <motion.div className="cards__wrapper" animate={animation} >
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-3.jpg').default}
              text='Application Services'
              label='Service'
              path='/'
            />
            <CardItem
              src={require('../images/img-4.jpg').default}
              text='Automation'
              label='Service'
              path='/'
            />
            <CardItem
              src={require('../images/img-3.jpg').default}
              text='Data & Analytics'
              label='Service'
              path='/'
            />
          </ul>  
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-6.png').default}
              text='Cloud'
              label='Service'
              path='/sign-up'
            />
            <CardItem
              src={require('../images/img-1.jpg').default}
              text='Customer Experience'
              label='Service'
              path='/sign-up'
            />
            <CardItem
              src={require('../images/img-1.jpg').default}
              text='Finance Consulting'
              label='Service'
              path='/sign-up'
            />
          </ul>  
        </motion.div>
      </div>
    </div>
  )
}

export default Cards