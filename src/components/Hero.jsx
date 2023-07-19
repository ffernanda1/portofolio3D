import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='realtive w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0
       top-[120px] max-w-7xl mx-auto 
       flex flex-row items-start gap-5`}>
        <div className="flex flex-col
       justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#99ff99]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#a2dea5]`}>Hi, I'm
            <span className="text-[#52d959]"> Fernanda</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#0a7310]`}>
            I develop Frontend and Backend <br className="sm:block hidden" /> for web applications React
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero