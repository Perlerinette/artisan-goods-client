import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../auth/Auth';
import ProductIndex from '../products/ProductIndex';
import HomeGalleryParent from '../products/HomeGalleryParent';
import Logout from '../auth/Logout';

const Routes = (props) => {


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
          sessionToken === localStorage.getItem('token') ? <ProductIndex token={sessionToken} /> : <Auth updateToken={updateToken} />
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
                <Logout setSessionToken={setSessionToken} />                
            </Route>
        </Switch>
     )
}
 
export default Routes;
