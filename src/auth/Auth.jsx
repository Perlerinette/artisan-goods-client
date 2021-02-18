import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ProductIndex from '../products/ProductIndex';

const Auth = () => {
    return ( 
        <>
            <h3>Sign up or login in your account</h3>
            <Link className='text-decoration-none pl-5' to='/myShop' ></Link>

        </>
     );
}
 
export default Auth;