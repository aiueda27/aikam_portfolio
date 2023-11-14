const Input = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
      />
    </label>
  )
}

export default Input
