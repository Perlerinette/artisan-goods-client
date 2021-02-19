import React, { useState } from 'react';
import{ Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler, Button } from 'reactstrap';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";




const Sitebar = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }


    return ( 
        <>
            <Navbar color="secondary" light expand="md">
                <NavbarBrand >Artisan Goods</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <Link className='text-decoration-none pl-5' to='/' >Home</Link>
                            <Link className='text-decoration-none pl-5' to='/myShop'>My Shop</Link>
                            <Link className='text-decoration-none pl-5' to='/logOut'>Log Out</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
     );
}
 
export default Sitebar ;