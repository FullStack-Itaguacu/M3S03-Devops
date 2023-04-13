import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import {MdLocalPharmacy} from 'react-icons/md'

const HeaderLogin = () => {
  return (
    <Navbar  bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand ><MdLocalPharmacy/>   LABPharmacy Inc.</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default HeaderLogin