import React from "react";
import { Outlet } from "react-router-dom";
import HeaderApp from "../components/HeaderApp";
import { useContexto } from "../context/useContexto";

import FormLogin from "../components/FormLogin";
import HeaderLogin from "../components/HeaderLogin";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.png";

const AppContainer = () => {
  const { loggedIn } = useContexto();

  if (!loggedIn) {
    return (
      <>
      <HeaderLogin />
      
      <Row style={{ height: "100vh" }} className="align-items-center">
        <Col md={6} className="mx-auto align-itens-center">
          <Image src={logo} fluid />
        </Col>
        <Col md={6} className="mx-auto align-items-center">
          <FormLogin />
        </Col>
      </Row>
    </>
    );
  }
  return (
    <>
      <HeaderApp />
      <Outlet />
    </>
  );
};

export default AppContainer;
