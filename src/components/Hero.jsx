import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-purple">Ai</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Over 2 years of experience <br className="sm:block hidden" /> in
            front end development. <br className="sm:block hidden" />I have a
            verifiable history of <br className="sm:block hidden" />
            ES6, React, Vue.js, TypeScript, <br className="sm:block hidden" />
            HTML, CSS, Sass, Git, and
            <br className="sm:block hidden" />
            various front-end frameworks.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
