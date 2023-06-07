import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets//hero_image_back.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCouter from 'number-counter'

const Hero = () => {

  const transition = {type: 'spring', duration :2}
  const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="hero">

      <div className="blur hero-blur "></div>
      <div className="left-h">
        <Header/>
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}>
          </motion.div>
          <span>the best fitness club in the town</span>  
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text '>Shape </span>
            <span>Your</span>
          </div>
          <div>
              <span>Ideal body</span>
          </div>
          <div className='span'>
            <span>Shape and build your ideal body
                and live your life to the fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
              <span className='figures-number'>
                  <NumberCouter end={140} start ={54} delay='4' preFix="+"/>    
              </span>
              <span className='figures-text'>expert coaches</span>
          </div>
          <div>
              <span className='figures-number'>
              <NumberCouter end={978} start ={878} delay='5' preFix="+"/>    
              </span>
              <span className='figures-text'>members joined</span>
          </div>
          <div>
              <span className='figures-number'>
              <NumberCouter end={50} start ={0} delay='3' preFix="+"/>
              </span>
              <span className='figures-text'>fitness programs</span>
          </div>
        </div>
        {/* Hero button */}

        <div className="hero-buttons">
                <buttons className="btn btn-first">Get Start</buttons>
                <buttons className="btn btn-second">Learn More</buttons>
            </div>
      </div>
      <div className="right-h">
            <button className="btn">Join Now</button>

            {/* hero image */}

            <motion.img 
            initial={{right:'11rem'}}
            whileInView={{right:'7.5rem'}}
            transition={transition}
            src={hero_image} alt="" className='hero-image'/>
            <motion.img 
            initial={{right:'1rem'}}
            whileInView={{right:'15.2rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back'/>
            
            {/* Calories */}

            <motion.div 
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={{...transition, type:'tween'}}            
            className="calories">
                <img src={Calories} alt="" />
                <div className='calories_number'>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero