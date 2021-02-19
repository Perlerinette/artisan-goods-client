import React from 'react';
import {Row, Container} from "reactstrap";

const Footer = () => {

    const theDate = new Date().getFullYear();

    return (
        <div className="footer">
        <div className='footer-copyright text-center ml-auto py-3'>  
            &copy; {theDate} - Inception Team - Blue Badge      
        </div>
        </div>
    );
};

export default Footer;