import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './HomeGalleryChild';
import {CardColumns, UncontrolledCarousel} from 'reactstrap';


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
  
const items = [
    {
        src: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhbmtldHMlMjBrbml0fGVufDB8fDB8&auto=format&fit=crop&w=1000&q=60',
        altText: 'Slide 1',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
      },
      {
        src: 'https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
        altText: 'Slide 1',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
      },
  {
    src: "https://images.unsplash.com/photo-1610701596295-4dc5d6289214?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80",
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1',
    className: 'items'
    
  },
  {
    src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://images.unsplash.com/photo-1578426720323-6d3b67133446?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1605&q=80',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },


];



    useEffect(()=>{
        fetchProducts();
    }, []); 

    function displayCards(){

        return products.length > 0 ? products.map(products => <HomeGalleryChild productItem = {products} />) : null;
    }

    return (
        
        
        
        <div className="pageBody">
            
        
         <UncontrolledCarousel className="Carousel" items={items} />

        <div className="colorDiv">
            <h1 className="h1OpenShop">Open your own handmade shop!</h1>
            <button className="openShop">My Shop</button>
           
        </div>
       {/* <div className="bodyDiv">
           <h1>products</h1>
       </div> */}
        <CardColumns className="CardColumns">
            {displayCards()}
        </CardColumns>
        </div>
    )

    
};




 
export default HomeGalleryParent;