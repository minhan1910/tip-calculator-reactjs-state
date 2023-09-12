/* eslint-disable react/prop-types */

function Reset({ onReset }) {
  return (
    <div className="actions flex flex-center">
      <button className="btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
