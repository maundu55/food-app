import React from 'react'
import hero_img from '../../assets/pasta2.png'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className='hero-container'>
        <div className='hero_content'>
          <h1>GEN-Z DINER</h1>
          <img src={hero_img} alt="" className='hero_img'/>
        </div>
      </div>
    </div>
  )
}

export default Hero