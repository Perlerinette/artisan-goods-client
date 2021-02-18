import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from '../auth/Auth';
import ProductIndex from '../products/ProductIndex';
import ProductHomeGallery from '../products/ProductHomeGallery';

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/home"><ProductHomeGallery /></Route>
            <Route exact path="/myAccount"><Auth /></Route>
            <Route exact path="/logOut"><Auth /></Route>
            <Route exact path="/myShop"><ProductIndex /></Route>
        </Switch>
     )
}
 
export default Routes;
