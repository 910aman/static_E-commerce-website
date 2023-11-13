import React from 'react'
import './Hero.css'
// import hand_icon from '../Assests/iconWave.png'
import hand_icon from '../Assests/iconWave.png'
import arrow_icon from '../Assests/arrow.png'
import hero_Image from '../Assests/hero_image.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h1>New Arrivals Only</h1>
            <div>
              <div className="hero-hand-icon">
                <h2>new</h2>
                <img src={hand_icon} alt=""/>
              </div>
              <h2>Collections</h2>
              <h2>for everyone</h2>
            </div>
            <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_Image} alt="" />
        </div>
       
    </div>

  )
}

export default Hero
