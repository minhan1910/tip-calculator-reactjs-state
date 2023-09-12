import { useState } from "react";
import "./App.css";
import BillInput from "./Components/BillInput";
import SelectPercentage from "./Components/SelectPercentage";
import Output from "./Components/Output";
import Reset from "./Components/Reset";

const selectBillOptions = [
  {
    id: 1,
    value: 0,
    text: "Disatisfied 0%",
  },
  {
    id: 2,
    value: 5,
    text: "It was okay 5%",
  },
  {
    id: 3,
    value: 10,
    text: "It was good 10%",
  },
  {
    id: 4,
    value: 20,
    text: "Absolutely amazing! 20%",
  },
];

function App() {
  const [bill, setBill] = useState(0);
  const [meBill, setMeBill] = useState(0);
  const [friendBill, setFriendBill] = useState(0);

  const meBillPerTotal = Math.ceil(
    calcPercentagePerTotal(bill, toPercentage(meBill))
  );
  const friendBillPerTotal = Math.ceil(
    calcPercentagePerTotal(bill, toPercentage(friendBill))
  );

  function handleGetYourBill(value) {
    setBill(Number(value));
  }

  function handleGetMeBill(value) {
    setMeBill(Number(value));
  }

  function handleGetFriendBill(value) {
    setFriendBill(Number(value));
  }

  function toPercentage(num) {
    return num / 100;
  }

  function calcPercentagePerTotal(total, num) {
    return total * num;
  }

  function averageBill(...bills) {
    return bills.reduce((res, cur) => res + cur, 0) / bills.length;
  }

  function handleReset() {
    setBill(0);
    setMeBill(0);
    setFriendBill(0);
  }

  const isShowBill = bill > 0 || meBillPerTotal > 0 || friendBillPerTotal > 0;

  return (
    <div className="container">
      <BillInput value={bill} onChange={handleGetYourBill}>
        <span>How much was the bill? </span>
      </BillInput>
      <SelectPercentage
        value={meBill}
        onChange={handleGetMeBill}
        options={selectBillOptions}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        value={friendBill}
        onChange={handleGetFriendBill}
        options={selectBillOptions}
      >
        <span> How did your friend like the service?</span>
      </SelectPercentage>

      {isShowBill ? (
        <>
          <Output
            bill={bill}
            tip={averageBill(meBillPerTotal, friendBillPerTotal)}
          />
          <Reset onReset={handleReset} />
        </>
      ) : null}
    </div>
  );
}

export default App;
