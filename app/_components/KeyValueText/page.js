const KeyValueText = ({ label, value }) => {
  return (
    <div className="font-semibold text-sm px-3">
    {label}: <span className="font-[300]">{value}</span>
  </div>
  )
}

export default KeyValueText