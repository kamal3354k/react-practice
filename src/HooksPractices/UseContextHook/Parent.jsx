import React from "react";
import UserProvider from "./Context";
import SubParent from "./SubParent";
const Parent = () => {
  return (
    <UserProvider>
      <SubParent />
    </UserProvider>
  );
};

export default Parent;
