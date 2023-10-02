import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import SiberHackLogo from "../assets/img/logo-SH.png"; // Import your logo image here

import { Link } from "react-router-dom"; 

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <img
              src={SiberHackLogo} // Use your logo image source here
              alt="SiberHack Logo"
              width="50" // Set the width of the logo
              height="50" // Set the height of the logo
              className="d-inline-block align-top mr-2" // Add margin-right for spacing
            />
            SiberHack.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
             <Link to="/kelas">
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-4">
              Learn With Us
              </button>
            </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
