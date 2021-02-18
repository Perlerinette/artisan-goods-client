import React, { useState } from 'react';
import{ Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler, Button } from 'reactstrap';
import Auth from '../auth/Auth';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ProductIndex from '../products/ProductIndex';
import ProductHomeGallery from '../products/ProductHomeGallery';



const Sitebar = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    // const openMyShopPage = () => {
    //     return(
    //         //alert("open Auth component")
    //         //<Auth />
    //         <ProductIndex />
    //     )
    // }

    // const openGalleryPage = () => {
    //     return(
    //         alert("open ProductHomeGallery component")
    //         // <ProductHomeGallery />
    //     )
    // }

    // return ( 
    //     <Navbar color="secondary" light expand="md">
    //         <NavbarBrand href="/">Artisan Goods</NavbarBrand>
    //         <NavbarToggler onClick={toggle} />
    //         <Collapse isOpen={isOpen} navbar>
    //             <Nav className="ml-auto" navbar>
    //                 <NavItem>
    //                     <Button color="info" onClick={openGalleryPage}>Goods Gallery</Button>{' '}
    //                     <Button color="info" onClick={openMyShopPage}>My Shop</Button>{' '}
    //                     <Button color="info" onClick={props.clickLogout}>Log Out</Button>
    //                 </NavItem>
    //             </Nav>
    //         </Collapse>
    //     </Navbar>
    //     )

    return ( 
        <>
            <Navbar color="secondary" light expand="md">
                <NavbarBrand >Artisan Goods</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <Link className='text-decoration-none pl-5' to='/home' >Home</Link>
                            <Link className='text-decoration-none pl-5' to='/myAccount'>My Shop</Link>
                            <Link className='text-decoration-none pl-5' to='/logOut'>Log Out</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
     );
}
 
export default Sitebar ;