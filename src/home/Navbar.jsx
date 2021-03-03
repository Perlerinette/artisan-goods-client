import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Nav,
  NavbarToggler,
  Button,
} from "reactstrap";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  // Hover effect on buttons
  function changeLink(e) {
    e.target.style.fontWeight = 'bold';
    e.target.style.color = '#b0c4b1';
  }

  function resetLink(e) {
    e.target.style.fontWeight = 'normal';
    e.target.style.color = 'black';
  }

  return (
    <>
      <div className="topDiv">
  
      </div>
      <Navbar light expand="md">
        <NavbarBrand>
          <a class="logo" href="#">
            <img
              src="https://i.pinimg.com/564x/57/c7/18/57c71821fd32b00caf33820cc81cc2de.jpg"
              alt=""
              width="90"
              height="90"
            />
          </a>
          Artisan Goods
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                onMouseOver={changeLink} onMouseLeave={resetLink}
                style={{ color: "black", fontSize:'large' }}
                className="text-decoration-none pl-5"
                to="/"
              >
                Home
              </Link>
              <Link
                onMouseOver={changeLink} onMouseLeave={resetLink}
                style={{ color: "black", fontSize:'large' }}
                className="text-decoration-none pl-5"
                to="/myShop"
              >
                My Shop
              </Link>
              <Link
                onMouseOver={changeLink} onMouseLeave={resetLink}
                style={{ color: "black", fontSize:'large' }}
                className="text-decoration-none pl-5"
                to="/logOut"
              >
                Log Out
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Sitebar;
