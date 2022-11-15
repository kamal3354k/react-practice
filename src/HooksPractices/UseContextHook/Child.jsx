import React from "react";
import { UserContext } from "./Context";

const Child = () => {
  const [Data] = UserContext();
  return (
    <>
      {/* {Data?.map((d) => ( */}
        <div>{Data.age}</div>
      {/* ))} */}
    </>
  );
};

export default Child;
