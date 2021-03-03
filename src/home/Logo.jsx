import React from 'react';
import logo from '../assets/AG-LOGO.gif';

const Logo = () => {
    return ( 
        <div className='d-flex justify-content-center'>
        <a className="logo" >
            <img
              src={logo}
              // style={ {paddingTop: "35px"}}
              alt=""
              width="100"
              height="100"
            />
          </a>
          Artisan Goods
          </div>

     );
}
 
export default Logo;