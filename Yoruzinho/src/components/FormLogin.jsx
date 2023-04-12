import React from "react";
import { Form, Button , Alert} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  //funcao fake de validacao de usuario
  const validarUsuario = (email, senha) => {
    if (email  && senha) {

      return true;
    } else {
      return false;
    }
  };
//funcao para redirecionar para a pagina inicial
  const redireccionar = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements["Login.email"].value;
    const senha = event.target.elements["Login.senha"].value;
    validarUsuario(email, senha) ? redireccionar("/app") : alert("Email ou senha incorretos");
  };

  return (
    <Form
      className="mx-auto "
      style={{ width: "320px" }}
      onSubmit={handleSubmit}
    >
      <Form.Text>Login</Form.Text>
      <Form.Group className="mb-3" controlId="Login.email">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required />
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
  );
};
export default FormLogin;