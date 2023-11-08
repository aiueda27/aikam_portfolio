import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../../utils/motion'
import { styles } from '../../styles'

const SectionHeader = ({ subText, headText, description = false }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{subText}</p>
        <h2 className={styles.sectionHeadText}>{headText}.</h2>
      </motion.div>

      {description && (
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {description}
        </motion.p>
      )}
    </>
  )
}

export default SectionHeader
