import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';

const HomeGalleryChild = (props) => {
    return ( 
      <div>
        <Card className="Card">
        <CardBody className="CardBody">
          <CardImg src={props.productItem.photoURL} alt="card image" /> 
          <CardTitle tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>{props.productItem.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
     );
}
 
export default HomeGalleryChild;
