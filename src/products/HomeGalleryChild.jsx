import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col} from 'reactstrap';

const HomeGalleryChild = (props) => {

    return ( 
        <Card>
        <CardBody>
          <CardImg src={props.productItem.photoURL} alt="card image" /> 
          <CardTitle tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>{props.productItem.description}</CardText>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
            
          <Button>Button</Button>
        </CardBody>
      </Card>
     );
}
 
export default HomeGalleryChild;
