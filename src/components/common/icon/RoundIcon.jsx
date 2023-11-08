const RoundIcon = ({ link, icon, iconName }) => {
  return (
    <div
      onClick={() => window.open(link, '_blank')}
      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    >
      <img src={icon} alt={iconName} className="w-1/2 h-1/2 object-contain" />
    </div>
  )
}

export default RoundIcon
