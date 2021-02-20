import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../auth/Auth';
import ProductIndex from '../products/ProductIndex';
import HomeGalleryParent from '../products/HomeGalleryParent';

const Routes = () => {
    
    return ( 
        <Switch>
            <Route exact path="/home"><HomeGalleryParent /></Route>
            <Route exact path="/myAccount"><Auth /></Route>
            <Route exact path="/logOut">
                <Logout setSessionToken={setSessionToken} updateToken={updateToken}/></Route>
            <Route exact path="/myShop"><ProductIndex /></Route>
        </Switch>
     )
}
 
export default Routes;
