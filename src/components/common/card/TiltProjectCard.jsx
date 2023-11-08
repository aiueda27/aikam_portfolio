import { TiltCardWrapper } from '.'
import { RoundIcon } from '../icon'
import { github, link } from '../../../assets'

const TiltProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link = false,
  website_link = false,
  index,
}) => {
  const tiltStyle = 'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'

  return (
    <TiltCardWrapper fadeInDirection="up" index={index} tiltStyle={tiltStyle}>
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {website_link && (
            <RoundIcon link={website_link} icon={link} iconName="link" />
          )}
          {source_code_link && (
            <RoundIcon
              link={source_code_link}
              icon={github}
              iconName="github"
            />
          )}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </TiltCardWrapper>
  )
}

export default TiltProjectCard
