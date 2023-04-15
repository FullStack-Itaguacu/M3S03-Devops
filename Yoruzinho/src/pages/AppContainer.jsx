import React from "react";
import { Outlet } from "react-router-dom";
import HeaderApp from "../components/HeaderApp";

const AppContainer = () => {
  return (
    <>
      <HeaderApp/>
      <Outlet/>
    </>
  );
};

export default AppContainer;
