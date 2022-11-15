import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res?.data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ul>
      {console.count("Render")}
      {data?.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </ul>
  );
};

export default UseEffectHook;
