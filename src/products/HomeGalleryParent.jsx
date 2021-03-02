import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './HomeGalleryChild';
import {CardDeck, UncontrolledCarousel, Col, Row, Input, InputGroup, InputGroupAddon, InputGroupText,} from 'reactstrap';
import { Search } from 'react-bootstrap-icons';
import SilkFlowers from "./assets/silkFlowers.jpeg";
import WallArt from "./assets/wallArt.jpg";
import TableSetting from "./assets/tableSetting.jpeg";
import Candle from "./assets/candle.jpeg";




const HomeGalleryParent = (props) => {

    const [products, setProducts] = useState([]);
    const [searchBox, setSearchBox] = useState('');


   
    
  
    const items = [
        {
            src: TableSetting,
            altText: 'blanket slide',
            className: 'slide1'
        },
        {
            src: Candle,
            altText: 'Candles Slide',
            key: '3'
        },
    {
        src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        altText: 'Mender Slide',
        key: '1',
        className: 'items'
        
    },
    // {
    //     src: WallArt,
    //     altText: 'Wall Art Slide',
    //     key: '2'
    // },
 
    {
        src: SilkFlowers,
        altText: 'Flowers Slide',
        key: '2'
    },

    ];

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
                return x.name.toLowerCase().includes(searchBox.toLowerCase()) > 0
            } )
            console.log('search ', searchArray);
            setProducts(searchArray);
        })
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
            <Row className= "searchBar" style={{marginTop: 200}}>
                <Col sm="4"></Col>
                <Col sm="4">
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><Search /></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="search for goods.." type="input" onKeyPress={e => { if(e.key === "Enter") {search(e)}  }} />   
                    </InputGroup>
                </Col>
                <Col sm="4"></Col>
            </Row>
            <br/>
            </>
        )
    }

    useEffect(()=>{
        fetchProducts();
    }, [searchBox]); 
    

    function displayCards(){

        return products.length > 0 ? products.map(products => <HomeGalleryChild productItem = {products} />) : null;
    }


    return (     
        <>
        <UncontrolledCarousel className="Carousel" items={items} />
       
       
<div className="gradientDiv">
    
</div>
        <h1 id="featuredProducts">featured products</h1>
             {searchByKeyword()}
            
        <CardDeck className="cardDeckCss" style={{justifyContent: 'center', width: "auto" , marginBottom: 20}}>
            {displayCards()}
        </CardDeck>
      
       </>

    )
};




 
export default HomeGalleryParent;