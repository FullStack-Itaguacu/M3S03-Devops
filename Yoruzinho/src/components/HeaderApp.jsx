import React from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContexto } from "../context/useContexto";
import LogoHeader from "../assets/LogoHeader.png";

const HeaderApp = () => {
  const { logout } = useContexto();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={LogoHeader}
            height="30"
            className="d-inline-block align-top"
            alt="PHARMACY CENTRAL SYSTEM"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/app">
              Farmacias
            </Link>
            <Link className="nav-link" to="/app/cadastroestablecimento ">
              Cadastrar Farmacia
            </Link>
            <Link className="nav-link" to="/app/cadastroproduto">
              Cadastrar Produto
            </Link>
            <Link className="nav-link" to="/app/listaprodutos">
              Lista de Produtos
            </Link>
            <Link className="nav-link" onClick={logout}>
              LOGOUT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderApp;
