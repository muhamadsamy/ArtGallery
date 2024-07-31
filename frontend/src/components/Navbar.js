import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavigationBar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem("authToken") !== null;

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("customer");
    navigate("/login");
  };
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
            <Link className="text-light text-decoration-none m-2 me-5" to={"/"}>
              Home
            </Link>

            <Link
              className="text-light text-decoration-none m-2 ms-3"
              to={"/cart"}
            >
              Shop <sup>{cartCount}</sup>
            </Link>

            {isAuthenticated ?   (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/profile"}
                  >
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <button onClick={handleLogout}
                    className="nav-link text-light text-decoration-none"
                  >
                    Logout
                  </button>
                </NavDropdown.Item>
              </NavDropdown>
            ): (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/signup"}
                  >
                    Sign up
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-light text-decoration-none"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
