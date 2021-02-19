import React, { useState } from 'react';
import{ Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler } from 'reactstrap';
import {  Link,  } from "react-router-dom";





const Sitebar = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

   

    return ( 

        <>
<div className="topDiv"></div>
    
    <Navbar  light expand="md">
                <NavbarBrand className="NavbarBrand" >Artisan Goods</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                {/* <NavItem>
                <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../../logo.jpg" alt="" width="30" height="24"/>
    </a>
  </div>
                </NavItem> */}
                        <NavItem className= "tabs">
                            
                            <Link className='text-decoration-none pl-5' to='/home' >Home</Link>
                            <Link className='text-decoration-none pl-5' to='/myAccount'>My Shop</Link>
                            <Link className='text-decoration-none pl-5' to='/logOut'>Log Out</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            
            </>
);
};
 
export default Sitebar ;