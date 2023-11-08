import { VerticalTimeline } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { SectionHeader } from './common'

import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { ExperienceCard } from './common/card'

const Experience = () => {
  return (
    <>
      <SectionHeader
        subText="What I have done so far"
        headText="Work Experience"
      />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
