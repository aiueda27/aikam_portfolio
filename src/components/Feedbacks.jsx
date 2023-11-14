import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'
import SectionHeader from './common/SectionHeader'
import { FeedbackCard } from './common/card'

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <SectionHeader subText="What others say" headText="Testimonials" />
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-col gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
