import React from 'react';
import logo from '../assets/AG-LOGO.gif';

const Logo = () => {
    return ( 
        <div style={{justifyContent: 'center'}}>
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
          </div>

     );
}
 
export default Logo;