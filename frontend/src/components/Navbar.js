import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


function NavigationBar() {

  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <Navbar
      expand="lg"
      className="navbar-custom "
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto">
            <Navbar.Brand className="mx-auto">
              <Link className="text-light text-decoration-none" to={"/"}>
                {" "}
                Art Gallery
              </Link>
            </Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text-light text-decoration-none" to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light text-decoration-none" to={"/cart"}>
                Shop <sup>{cartCount}</sup>
              </Link>
            </Nav.Link>

            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item >
              <Link className="text-light text-decoration-none" to={"/signup"}>
                Sign up
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link className="text-light text-decoration-none" to={"/login"}>
                Login
              </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
