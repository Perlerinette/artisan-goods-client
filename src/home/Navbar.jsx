import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  NavItem,
  Nav,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";


const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };


  // Hover effect on buttons
  function changeLink(e) {
    // e.target.style.fontWeight = 'bold';
    e.target.style.color = '#f7e1d7';
  }

  function resetLink(e) {
    // e.target.style.fontWeight = 'normal';
    e.target.style.color = 'black';
  }

  return (
    
      <Navbar className="navbarCss " dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-auto" navbar>
            <NavItem>
              <Link
                onMouseOver={changeLink} onMouseLeave={resetLink}
                style={{ color: "black" }}
                className="text-decoration-none pl-5"
                to="/"
              >
                Home
              </Link>
              <Link
                onMouseOver={changeLink} onMouseLeave={resetLink}
                style={{ color: "black" }}
                className="text-decoration-none pl-5"
                to="/myShop"
              >
                My Shop
              </Link>
              <Link
                onMouseOver={changeLink} onMouseLeave={resetLink}
                style={{ color: "black" }}
                className="text-decoration-none pl-5"
                to="/logOut"
              >
                Log Out
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    
  );
};

export default Sitebar;
