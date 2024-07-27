import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="me-auto">
          <Navbar.Brand className="mx-auto" href="#home">Art Gallery</Navbar.Brand>
          </div>
          
            
          
          
         
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link> 
            
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log In</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

