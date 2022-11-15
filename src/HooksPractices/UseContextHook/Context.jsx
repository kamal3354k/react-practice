import React, { createContext, useContext, useState } from "react";
const DataContext = createContext();

export const UserContext = () => useContext(DataContext);

const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "kamal",
    age: 22,
  });

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

export default UserProvider;
