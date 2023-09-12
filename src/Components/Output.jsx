/* eslint-disable react/prop-types */
function Output({ bill, tip }) {
  return (
    <p className="message">
      You pay ${bill + tip} (${bill} + ${tip} tips)
    </p>
  );
}

export default Output;
