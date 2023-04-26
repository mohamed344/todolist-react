import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='info'>
            <input type='text' className='todoinpt' />
            <button className='todobtn'>Add to do</button>
        </div>
    </div>
  )
}

export default Hero
