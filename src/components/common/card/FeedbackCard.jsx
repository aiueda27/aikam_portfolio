import { motion } from 'framer-motion'

import { fadeIn } from '../../../utils/motion'
import { quote_start, quote_end, person } from '../../../assets'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', 0.5 * index, 0.75)}
      className="bg-black-200 p-10 rounded-3xl w-full"
    >
      <div>
        <img src={quote_start} alt="quotation-start" className="w-[48px]" />
        <div className="mt-1 flex justify-start items-center gap-1">
          <img
            src={image ? image : person}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
        </div>
        <p className="mt-3 text-white tracking-wider sm:text-[18px] text-[15px]">
          {testimonial}
        </p>
        <img
          src={quote_end}
          alt="quotation-end"
          className="w-[48px] mt-1 ml-auto"
        />
      </div>
    </motion.div>
  )
}

export default FeedbackCard
