import React from "react";
import Child from "./Child";
import { UserContext } from "./Context";

const SubParent = () => {
  const [Data,setData] = UserContext();
  return (
    <>
      {/* {Data?.map((d) => ( */}
      <div>{Data.name}</div>
      <button onClick={()=>setData({name:"alex",age:21})}>Change</button>
      {/* ))}{" "} */}
      <hr />
      <Child />
    </>
  );
};

export default SubParent;
