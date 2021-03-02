import logo from '../assets/AG-LOGO.gif';
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

  return (
    <>
      <div className="topDiv">
        <h3 style={{ fontSize: "17px" }}>
          Spend over $75 and get FREE SHIPPING!
        </h3>
      </div>
      <Navbar light expand="md">
        <NavbarBrand>
          <a class="logo" href="#">
            <img
              src={logo}
              // style={ {paddingTop: "35px"}}
              alt=""
              width="100"
              height="100"
            />
          </a>
          Artisan Goods
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                style={{ color: "black" }}
                className="text-decoration-none pl-5"
                to="/"
              >
                Home
              </Link>
              <Link
                style={{ color: "black" }}
                className="text-decoration-none pl-5"
                to="/myShop"
              >
                My Shop
              </Link>
              <Link
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
    </>
  );
};

export default Sitebar;
