import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../auth/Auth';
import ProductIndex from '../products/ProductIndex';
import HomeGalleryParent from '../products/HomeGalleryParent';
import Logout from '../auth/Logout';

const Routes = (props) => {

    const [userEmail, setUserEmail] = useState('');
    const [sessionToken, setSessionToken] = useState("");

    useEffect(() => {
        if (localStorage.getItem("token")) {
        setSessionToken(localStorage.getItem("token"));
        }
    }, []);

    const updateToken = (newToken) => {
        localStorage.setItem("token", newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
    };

    

    const protectedViews = () => {
        return (
          sessionToken === localStorage.getItem('token') ? <ProductIndex token={sessionToken} email={userEmail} /> : <Auth updateToken={updateToken} setUserEmail={setUserEmail}/>
        )
    }



    return ( 
        <Switch>
            <Route exact path="/">
                <HomeGalleryParent />
            </Route>
            <Route exact path="/myShop">
                {protectedViews()}
            </Route>
            <Route exact path="/logOut">

                <Logout setSessionToken={setSessionToken} updateToken={updateToken} setUserEmail={setUserEmail}/>

            </Route>
        </Switch>
     )
}
 
export default Routes;
