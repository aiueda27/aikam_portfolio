import React from 'react'

import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { SectionHeader } from './common'
import { TiltServiceCard } from './common/card'

const About = () => {
  const description =
    'I have a verifiable history of ES6, React, Vue.js, TypeScript, HTML, CSS, Sass, Git, and various front-end frameworks. My goal is to create visually appealing and responsive web interfaces that enhance user interactions.'

  return (
    <>
      <SectionHeader
        subText="Introduction"
        headText="Overview"
        description={description}
      />

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <TiltServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
