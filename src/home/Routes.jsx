import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input, Row, Col } from 'reactstrap';
import Auth from '../auth/Auth';
import ProductIndex from '../products/ProductIndex';
import HomeGalleryParent from '../products/HomeGalleryParent';
import Logout from '../auth/Logout';

const Routes = (props) => {

    const [userEmail, setUserEmail] = useState('');
    const [sessionToken, setSessionToken] = useState("");
    const [searchBox, setSearchBox] = useState('');

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


    const search = (e) => {
        console.log('Hitted enter key !');
        setSearchBox(e.target.value);
        console.log('searchbox: ',searchBox); 
    }

    const searchByKeyword = () => {
        return(
            <>
            <br/>
            <Row>
                <Col sm="4"></Col>
                <Col sm="4">
                    <InputGroup>
                        <Input placeholder="search for goods.." type="input" onKeyPress={e => { if(e.key === "Enter") {search(e)}  }} />
                    </InputGroup>
                </Col>
                <Col sm="4"></Col>
            </Row>
            <br/>

            <HomeGalleryParent searchBox={searchBox}/>
            </>
        )
    }

    return ( 
        <Switch>
            <Route exact path="/">
                {searchByKeyword()}
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
