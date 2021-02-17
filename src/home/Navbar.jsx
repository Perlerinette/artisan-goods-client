import React, { useState } from 'react';
import{ Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler, Button } from 'reactstrap';

const Sitebar = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return ( 
        
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Artisan Goods</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Log Out</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

     );
}
 
export default Sitebar ;