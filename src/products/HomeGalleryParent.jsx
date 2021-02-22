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
        key: '3',
        className: 'slide1'
      },
      {
        src: 'https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuZGxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
        altText: 'Slide 1',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
      },
  {
    src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
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
  {
    src: 'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
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
        <div className="groupDiv">
            <div className="pinkDiv">
                <h1 class="pinkH1">Featured Artist:</h1>
                <img className="portrait" style={{ borderRadius: "50px", width: '200px', height: "300px"}} src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"></img>
                <p className="p">   Hannah Wilson is a ceramic artist living and working in the Finger Lakes Region in Upstate New York. she has crafted a line of fine, functional, handmade pottery from my rural studio outside of Ithaca, NY and sells at regional art fairs in the North East as well as at several galleries in the Finger Lakes
                Hannah says making pottery is a constant source of joy and amusement.
                </p>
                
               <img className="vases" style={{ borderRadius: "50px", width: '320px', height: "220px"}} src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"></img>
               <img className="bowl" style={{ borderRadius: "50px", width: '200px', height: "180px"}} src="https://images.unsplash.com/photo-1552740844-4f8a8206c68d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80"></img>

                

            </div>
            <div className="imgGrid">
                <img className="img1" style={{ width: '300px', height: "250px"}} src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8amV3ZWxyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=6"></img>

                <img className="img2" style={{ width: '300px', height: "250px"}} src="https://images.unsplash.com/photo-1608492024938-bbdd385d5175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHRhYmxlJTIwc2V0dGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"></img>

                <img className="img3" style={{ width: '300px', height: "250px"}} src="https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"></img>

                <img className="img4" style={{ width: '300px', height: "250px"}} src="https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMHByb2R1Y3RzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"></img>
            </div>
            </div>
               {/* shape divider app */}
           <div class="custom-shape-divider-bottom-1613956483">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>

           </div>
           <div className="greenDiv"></div>
        </div>
       <div className="bodyDiv">
           
       </div>
        <CardColumns className="CardColumns">
            {displayCards()}
        </CardColumns>
        </div>
    )

    
};




 
export default HomeGalleryParent;