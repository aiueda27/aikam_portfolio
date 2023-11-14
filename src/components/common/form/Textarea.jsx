const Textarea = ({ label, name, value, placeholder, onChange }) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      <textarea
        rows="7"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
      />
    </label>
  )
}

export default Textarea
