import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <>
  
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img height='50' weight='150' src="https://i.ibb.co/gdHnpJ8/logo.png" alt="" />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
</>
    );
};

export default Header;