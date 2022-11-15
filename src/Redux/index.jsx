import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { inc,dec } from "./Action.jsx";

const ReduxComp = () => {
  const counter = useSelector(state => state)
  const counterFunction = useDispatch()
  console.log(counter.counter,"as")
  return (
    <div>
      <button onClick={()=>counterFunction(inc())}>+</button>
      <span>{counter.counter}</span>
      <button onClick={()=>counterFunction(dec())}>-</button>
    </div>
  );
};

export default ReduxComp;
