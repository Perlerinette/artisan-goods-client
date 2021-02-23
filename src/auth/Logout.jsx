import React, { useEffect } from 'react';
import Auth from '../auth/Auth';


const LogOut = (props) => {

    const clearToken = () => {
        localStorage.clear();
        props.setSessionToken('');
        props.setUserEmail('');
        console.log("Logged out");
    };

    useEffect(() => {
        clearToken()
    }, []);

    return ( 
        <>
<<<<<<< HEAD
        <Auth updateToken={props.updateToken} />
=======
        <Auth updateToken={props.updateToken} setUserEmail={props.setUserEmail}/>
>>>>>>> d50f030b90034ff9ddc957b6370c7782470cea63
        </>

     );
}
 
export default LogOut;