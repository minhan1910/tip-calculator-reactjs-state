/* eslint-disable react/prop-types */

function BillInput({ value, onChange, children }) {
  return (
    <div className="flex flex-center gap-2">
      {children}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default BillInput;
