import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './HomeGalleryChild';
import {CardColumns} from 'reactstrap';


const HomeGalleryParent = (props) => {

    let word = props.searchBox; 
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch('http://localhost:3000/product/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) 
        .then( (res) => res.json())
        .then((productData) => {
            console.log(productData);
            const searchArray = productData.filter((x) => {
                return x.name.toLowerCase().includes(word.toLowerCase()) > 0
            } )
            console.log('search ', searchArray);
            setProducts(searchArray);
        })
    }


    useEffect(()=>{
        fetchProducts();
    }, [word]); 
    

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