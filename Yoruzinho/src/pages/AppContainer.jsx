import React from "react";
import { Outlet } from "react-router-dom";

const AppContainer = () => {
  return (
    <>
      <div>AppContainer</div>
      <Outlet />
    </>
  );
};

export default AppContainer;
