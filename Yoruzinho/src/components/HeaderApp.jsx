import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {MdLocalPharmacy} from 'react-icons/md'
import {Link} from 'react-router-dom'

const HeaderApp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand >
          <MdLocalPharmacy /> LABPharmacy Inc.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/app">Farmacias</Link>
            <Link className="nav-link" to="/app/cadastroestablecimento ">Cadastrar Farmacia</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderApp;
