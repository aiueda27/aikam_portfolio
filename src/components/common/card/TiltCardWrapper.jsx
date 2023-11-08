import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { fadeIn } from '../../../utils/motion'

const TiltCardWrapper = ({
  children,
  fadeInDirection,
  index,
  motionStyle = false,
  tiltStyle,
}) => {
  return (
    <motion.div
      variants={fadeIn(`${fadeInDirection}`, 'spring', 0.5 * index, 0.75)}
      className={`${motionStyle && motionStyle}`}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${tiltStyle && tiltStyle}`}
      >
        {children}
      </Tilt>
    </motion.div>
  )
}

export default TiltCardWrapper
