import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../src/images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

    return ( 
     <>
       <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img height={40} src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
     <Nav.Link href="home#consultation">Free Consultation</Nav.Link>
     <Nav.Link href="home#feedback">Feedback</Nav.Link>
     <Nav.Link href="home#blogs">Blogs</Nav.Link>
      <Nav.Link href="home#about">About</Nav.Link>
      
    </Nav>
    <Nav>
      
      {
        user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> :  <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </>
    );
};

export default Header;