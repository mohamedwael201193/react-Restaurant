import React from "react";
import { Navbar ,Nav, Container  } from "react-bootstrap";
import './Navs.css'
import logo from "./../../img/logo.png"
const Navs = ()=>{
    return(
       < Navbar bg="light"  expand="lg" >
        <Container>
  <Navbar.Brand href="#home"><img src={logo} title='logo' alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">aboutus</Nav.Link>
      <Nav.Link href="#link">Review</Nav.Link>
      <Nav.Link href="#link">faq</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link id="lastnav" href="#">01124532807</Nav.Link>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
       )
}
export default Navs;