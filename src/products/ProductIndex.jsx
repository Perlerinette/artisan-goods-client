import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Auth from '../auth/Auth';
import ProductCreate from './ProductCreate';
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';

const ProductIndex = (props) => {

    const [productList, setProductList] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [productToUpdate, setProductToUpdate] = useState({});

    const getListOfProducts = () => {
        fetch('http://localhost:3000/product/owner', {
            method: 'GET',
            headers:new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then((productList) => {
            setProductList(productList);
            console.log('list of product from index -->', productList);
        })
    }


    const editUpdateProduct = (product) => {
        setProductToUpdate(product);
        console.log(product);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }


    useEffect( () => {
        getListOfProducts();
    }, [])

    return ( 
        <>
        <div className='text-right' >
                <Col style ={{padding: '70px'}} md='12'>
                <h6 className='font-italic'>{props.email} is connected</h6>
                </Col>
        </div>
        <Container>
            <Row>
                <Col md="3" style={{backgroundColor: "#F7E1D7", width: "400px", height: 730, padding: 15, borderRadius: 15}}>
                
                    <ProductCreate getListOfProducts={getListOfProducts} token={props.token}/>
                   
                </Col>
                <Col md="9" className='text-center'>
                    <ProductView getListOfProducts={getListOfProducts} productList={productList} editUpdateProduct={editUpdateProduct} updateOn={updateOn} token={props.token}/>
                </Col>
                <Col>
                {updateActive ? <ProductEdit productToUpdate={productToUpdate} updateOff={updateOff} token={props.token} getListOfProducts={getListOfProducts}/> : <></>}
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default ProductIndex;