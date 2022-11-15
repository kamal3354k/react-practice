import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const funOne = () => {
    console.log("fun 1");
    setCounterOne(counterOne + 1);
  };
  
  const funTwo = () => {
    console.log("fun 2");
    setCounterTwo(counterTwo + 1);
  };

  const isEven =useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  },[counterOne]);

  return (
    <>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={funOne}>{counterOne}</button>
      <button onClick={funTwo}>{counterTwo}</button>
    </>
  );
};

export default UseMemoHook;
