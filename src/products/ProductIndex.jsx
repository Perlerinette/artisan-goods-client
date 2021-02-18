import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductCreate from './ProductCreate';

const ProductIndex = () => {

    const [productList, setProductList] = useState([]);

    const getListOfProducts = () => {
        fetch('http://localhost:3000/log', {
            method: 'GET',
            headers:new Headers ({
                'Content-Type': 'application/json'
                //add Authorization !!!
            })
        })
        .then( (res) => res.json())
        .then((productList) => {
            setProductList(productList);
            console.log('list of product from index -->', productList);
        })
    }


    return ( 
        <Container>
            <Row>
                <Col md="3">
                    <ProductCreate />
                </Col>
                <Col md="9">
                
                </Col>
            </Row>
        </Container>
     );
}
 
export default ProductIndex;