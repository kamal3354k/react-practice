import React, { useState } from "react";
import { useCallback } from "react";
import Child from "./Child";

export const UseCallBackHook = () => {
  const [countOne, setcountOne] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    background:dark?"#000":"#fff",
    color:!dark?"#000":"#fff",
    
  }

  const oneFun = ()=>{
    console.log("one")
    setcountOne((pre)=>pre+1)
  }
  
  
  const getItem = useCallback(()=>{
    console.log("three")
  return [countOne,countOne+1,countOne+2]
  },[countOne])

  return (
    <>
      <h1 style={theme}>
        {countOne}
      </h1>
      <button onClick={oneFun}>one</button>
      <button onClick={()=>setDark(!dark)}>theme</button>
      <Child count={getItem}/>
    </>
  );
};
