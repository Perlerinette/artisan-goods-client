import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col} from 'reactstrap';




const HomeGalleryChild = (props) => {


    return ( 
      <div>
        <Card className="myShopCard" style={{width: 500, height: 350, marginLeft: "20%"}}>
        <CardBody style={{boxShadow: "2px 2px"}}>
          <CardImg src={props.productItem.photoURL} alt="card image" style={{width:   '175px'  }} /> 
          <CardTitle tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText tag="h6">{props.productItem.description}</CardText>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
            
            
            
        </CardBody>
      </Card>

        </div>
      );
    };
 
export default HomeGalleryChild;
