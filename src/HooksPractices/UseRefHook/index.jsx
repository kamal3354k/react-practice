import React, { useEffect, useState } from "react";
import { useRef } from "react";

//Useref in case we have to display render count
//directly dom manuplation and for reference

const UseRefHook = () => {
  const [count, setcount] = useState(0);
  const renderRef = useRef(1);
  const divRef = useRef(null);

  useEffect(() => {
    // setcountRender((prev) => prev + 1); ...it will run till infinite

    renderRef.current = renderRef.current + 1;
  });

  return (
    <div ref={divRef}>
      Render : {renderRef.current} Counter : {count}
      <button
        onClick={() => {
          setcount((prev) => prev + 1);
          divRef.current.style.color = "blue"; // reference and dom manuplation
        }}
      >
        click
      </button>
    </div>
  );
};

export default UseRefHook;
