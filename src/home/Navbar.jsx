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
                <NavItem>
                {/* <div class="container"> */}
    <a class="logo" href="#">
      <img src="https://i.pinimg.com/564x/57/c7/18/57c71821fd32b00caf33820cc81cc2de.jpg" alt="" width="90" height="90"/>
    </a>
  {/* </div> */}
                </NavItem>
                        <NavItem className= "tabs">
                            
                            <Link style={{color: "black"}} className='text-decoration-none pl-5' to='/home' >Home</Link>
                            <Link style={{color: "black"}} className='text-decoration-none pl-5' to='/myAccount'>My Shop</Link>
                            <Link style={{color: "black"}} className='text-decoration-none pl-5' to='/logOut'>Log Out</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            
            </>
);
};
 
export default Sitebar ;