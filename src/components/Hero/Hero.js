import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
// import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from 'number-counter'


const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true: false
  const calories = window.innerWidth <= 990 ? true: false

  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/> 
        {/* thebest ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile ? '160px': '210px'}}
            whileInView={{left:'8px'}}
            transition={{...transition, type: 'tween', duration: 2}}
          >

          </motion.div>
          <span>best fitness club in the city</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+' />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <NumberCounter end={978} start={800} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              <NumberCounter end={50} start={20} delay='4' preFix='+' />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>

      </div>
      <div className="right-h">
        <button className="btn">Join now</button>
        
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image'/>
        <motion.img
          initial={{right: '6rem'}}
          whileInView={{right: "14rem"}}
          transition={transition}
          src={hero_image_back} alt="" 
          className='hero-image-back'
        />
        {/* calories */}
        <motion.div 
          initial={{right: calories ? '4rem' : '28rem'}}
          whileInView={{right: calories ? '12rem' : '20rem'}}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
              <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero