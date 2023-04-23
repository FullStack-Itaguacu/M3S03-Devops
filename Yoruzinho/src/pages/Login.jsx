import React, { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import HeaderLogin from "../components/HeaderLogin";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useContexto } from "../context/useContexto";

const Login = () => {
  /* Para garantir que o servidor na 
  Replit acorde quando alguem accessar ao site
  vamos fazer uma chamada para o servidor
  assim que  for montado o componente da rota inicial
  */
  const { loadEstablecimentos } = useContexto();
  useEffect(() => {
    loadEstablecimentos();
  }, []);
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
};

export default Login;
