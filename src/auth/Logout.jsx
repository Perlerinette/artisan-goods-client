import React, { useEffect } from 'react';
import Auth from '../auth/Auth';


const LogOut = (props) => {

    const clearToken = () => {
        localStorage.clear();
        props.setSessionToken("");
        
    };

    useEffect(() => {
        clearToken()
    }, []);

    return ( 
        <>
        <Auth />
        </>

     );
}
 
export default LogOut;