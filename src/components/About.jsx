import React, { Fragment } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[#c9c9c9] rounded-[20px] 
          py-5 px-12 min-h-[280px] flex 
          justify-evenly items-center flex-col"
      >
        <img src={icon} alt='web-development'
          className="w-50 h-50 object-contain"
        />
        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Halo! Saya adalah seorang programmer yang terampil dan termotivasi
        dengan keahlian dalam pengembangan frontend dan backend. Saya bersemangat dalam
        mengerjakan codingan maupun pemecahan masalah dan kerja sama tim.
        Sepanjang karir saya, saya telah mengasah keterampilan pemrograman saya dengan membuat
        berbagai macam aplikasi web yang mulus dan terintegrasi. Dengan ilmu yang
        saya miliki, saya berharap bisa memberikan pengalaman pengguna yang luar biasa
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Fragment>
  )
}

export default SectionWrapper(About, "about")