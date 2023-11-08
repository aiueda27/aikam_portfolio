import { SectionWrapper } from '../hoc'
import { SectionHeader } from '../components/common'
import { TiltProjectCard } from './common/card'
import { projects } from '../constants'

const Works = () => {
  return (
    <>
      <SectionHeader subText="My work" headText="Projects" />

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <TiltProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
