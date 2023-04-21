import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContexto } from "../context/useContexto";

const FormLogin = () => {
  const { login, validarSenha, validarUsuario } = useContexto();

  //funcao para redirecionar para a pagina inicial
  const redireccionar = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements["Login.email"].value;
    const senha = event.target.elements["Login.senha"].value;
    validarUsuario(email, senha) && redireccionar("/app");
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="mx-auto " onSubmit={handleSubmit}>
            <Form.Text>Login</Form.Text>
            <Form.Group className="mb-3" controlId="Login.email">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Login.senha">
              <Form.Label> Senha</Form.Label>
              <Form.Control type="password" placeholder="senha" required />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="light" type="submit">
                Entrar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default FormLogin;
