// import logo from '../assets/AG-LOGO.gif';
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
    // e.target.style.fontWeight = 'bold';
    e.target.style.color = '#f7e1d7';
  }

  function resetLink(e) {
    // e.target.style.fontWeight = 'normal';
    e.target.style.color = 'black';
  }

  return (
    
      // <div className="topDiv">
      <div className='center'>
      <Navbar className="navbarCss" dark expand="md">
      {/* <NavbarBrand>
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
        </NavbarBrand> */}
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
      </div>
    
  );
};

export default Sitebar;
