import React from 'react'
import { motion } from 'framer-motion'

import { services } from '../constants'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { ServiceCard, SectionTitle } from './common'

const About = () => {
  return (
    <>
      <SectionTitle subText="Introduction" headText="Overview" />

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have a verifiable history of ES6, React, Vue.js, TypeScript, HTML,
        CSS, Sass, Git, and various front-end frameworks. My goal is to create
        visually appealing and responsive web interfaces that enhance user
        interactions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
