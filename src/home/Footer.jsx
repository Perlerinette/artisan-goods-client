import React from 'react';
import {Row, Container} from "reactstrap";

const Footer = () => {

    const theDate = new Date().getFullYear();

    return (
        

       
        <div className="footer">
             <div class="socialmedia">
            <a href="https://www.linkedin.com/" title="LinkedIn"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="https://github.com/jayhunt0824"
              ><i class="fab fa-github-square"></i
            ></a>
          </div>
        <div className='footer-copyright text-center ml-auto py-3'>  
            &copy; {theDate} - Inception Team - Blue Badge      
        </div>
        </div>
      
    );
};

export default Footer;