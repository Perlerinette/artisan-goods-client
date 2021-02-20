import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import { withRouter } from "react-router-dom";

const HomeGalleryChild = (props) => {
    return ( 


      <div className="Cards">
      <Card className="Card" style={{ width: '18rem', height: "350px",  background: "#DEDBD2" }}>
        <CardImg  src={props.productItem.photoURL} width="50" height="200"  alt="Card image" />
        <CardBody className="CardBody" style = {{background: "white"}} >
          <CardTitle tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{props.productItem.description}</CardText>
          <Button style={{background: "#4A5759"}}>Button</Button>
        </CardBody>
      </Card>
    </div>


  
     );
}
 
export default HomeGalleryChild;
