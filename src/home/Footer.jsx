import React from 'react';
import {Row, Container} from "reactstrap";

const Footer = () => {

    // const theDate = new Date().getFullYear();
    const theDate = '2021';

    return (
        <div className='footer-copyright text-center ml-auto py-3'>  
            &copy; {theDate} - Inception Team - Blue Badge      
        </div>
    );
};

export default Footer;