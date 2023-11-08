import React from 'react'

import TiltCardWrapper from './TiltCardWrapper'

const TiltServiceCard = ({ index, title, icon }) => {
  const motionStyle = 'xs:w-[250px] w-full'
  const tiltStyle = 'green-pink-gradient p-[1px] rounded-[20px] shadow-card'

  return (
    <TiltCardWrapper
      fadeInDirection="right"
      index={index}
      motionStyle={motionStyle}
      tiltStyle={tiltStyle}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </TiltCardWrapper>
  )
}

export default TiltServiceCard
