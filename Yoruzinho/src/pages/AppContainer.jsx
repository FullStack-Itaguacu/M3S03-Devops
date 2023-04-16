import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderApp from "../components/HeaderApp";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useContexto } from "../context/useContexto";
import { MdLocalPharmacy } from "react-icons/md";

const AppContainer = () => {
  const { loggedIn } = useContexto();

  if (!loggedIn) {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >
          <MdLocalPharmacy /> LABPharmacy Inc.
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Fazer Login</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
