import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './HomeGalleryChild';
import {CardColumns} from 'reactstrap';


const HomeGalleryParent = (props) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch('http://localhost:3000/product/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) .then( (res) => res.json())
            .then((productData) => {console.log(productData)
                setProducts(productData)
            })
    }




    useEffect(()=>{
        fetchProducts();
    }, []); 

    function displayCards(){

        return products.length > 0 ? products.map(products => <HomeGalleryChild productItem = {products} />) : null;
    }

    return (
        <div>
        
        <CardColumns>
            {displayCards()}
        </CardColumns>
        </div>
    )
};



 
export default HomeGalleryParent;