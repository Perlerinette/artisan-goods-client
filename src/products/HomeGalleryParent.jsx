import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './HomeGalleryChild';
import {CardDeck,CardColumns, UncontrolledCarousel, Col, Row, Input, InputGroup} from 'reactstrap';



const HomeGalleryParent = (props) => {

    const [products, setProducts] = useState([]);
    const [searchBox, setSearchBox] = useState('');

    
  
    const items = [
        {
            src: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhbmtldHMlMjBrbml0fGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',
            altText: 'blanket slide',
            className: 'slide1'
        },
        {
            src: 'https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
            altText: 'Candles Slide',
            key: '3'
        },
    {
        src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        altText: 'Mender Slide',
        key: '1',
        className: 'items'
        
    },
    {
        src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80',
        altText: 'Wall Art Slide',
        key: '2'
    },
 
    {
        src: 'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
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
             {searchByKeyword()}
        <CardDeck style={{justifyContent: 'center', padding: 60, width: "auto" , marginBottom: 20}}>
            {displayCards()}
        </CardDeck>
      
       </>

    )

    
};




 
export default HomeGalleryParent;