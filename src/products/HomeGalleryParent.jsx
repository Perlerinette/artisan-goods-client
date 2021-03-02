import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './HomeGalleryChild';
import {CardDeck, Carousel, Col, Row, Input, InputGroup, InputGroupAddon, InputGroupText,} from 'reactstrap';
import { Search } from 'react-bootstrap-icons';
import SilkBouquets from "./assets/silkBouquets.jpeg";
import Button from 'react-bootstrap/Button';





const HomeGalleryParent = (props) => {

    const [products, setProducts] = useState([]);
    const [searchBox, setSearchBox] = useState('');


   
    
  
    // const items = [
    //     {
    //         src: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhbmtldHMlMjBrbml0fGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',
    //         altText: 'blanket slide',
    //         className: 'slide1'
    //     },
    //     {
    //         src: 'https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    //         altText: 'Candles Slide',
    //         key: '3'
    //     },
    // {
    //     src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
    //     altText: 'Mender Slide',
    //     key: '1',
    //     className: 'items'
        
    // },
    // {
    //     src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80',
    //     altText: 'Wall Art Slide',
    //     key: '2'
    // },
 
    // {
    //     src: {SilkBouquets},
    //     altText: 'Flowers Slide',
    //     key: '2'
    // },

    // ];

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
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src=""
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>np
       
        {/* <div class="custom-shape-divider-top-1614696370">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div> */}
        <h1 id="featuredProducts">featured products</h1>
             {searchByKeyword()}
            
        <CardDeck className="cardDeckCss" style={{justifyContent: 'center', width: "auto" , marginBottom: 20}}>
            {displayCards()}
        </CardDeck>
      
       </>

    )
};




 
export default HomeGalleryParent;