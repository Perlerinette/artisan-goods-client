import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col} from 'reactstrap';






const MyPageCards = (props) => {

  //used in case no picture set in the card 
  function errorHandling(ev){
    ev.target.src =  'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg';
  }

  return ( 
    <div>
      <Card className="myShopCard" style={{width: 550,  height: 450, marginLeft: "16%", backgroundColor: "#f5f5f5"}}>
        <CardBody style={{}}>
          <CardImg src={props.productItem.photoURL} alt="card image" style={{width:   '175px'  }} onError = {errorHandling} /> 
          <CardTitle tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
          <div style={{ borderRadius: 5, padding: 20, display: "block"}}>
          <CardText tag="h6">{props.productItem.description}</CardText>
          </div>
        </CardBody>
      </Card>

      </div>
    );
  };
 
export default MyPageCards;
