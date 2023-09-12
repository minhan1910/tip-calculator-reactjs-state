/* eslint-disable react/prop-types */
function SelectPercentage({ value, options, onChange, children }) {
  return (
    <div className="flex flex-center gap-2">
      {children}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectPercentage;
