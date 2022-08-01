import React, { useState } from "react";

export default function CountApp() {
  const [counter, setCounter] = useState(0);

  const handleButtonPlusClick = () => {
    setCounter(counter + 1);
  };
  const handleButtonMinusClick = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleButtonPlusClick}> + </button>
      <button onClick={handleButtonMinusClick}> - </button>
    </div>
  );
}
