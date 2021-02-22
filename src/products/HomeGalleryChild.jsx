
import { useEffect, useState } from "react";
import React from 'react';
import { Card, Modal, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';
import ImageUploader from './ImageUploader';




const HomeGalleryChild = (props) => {

    return ( 
      <>
        <Card classname="cards">
        <CardBody className='gallery-cards'>
          <CardImg src={props.productItem.photoURL} alt="card image" /> 
          <CardTitle className='main-color' tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle className='main-color' tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText className='main-color'>{props.productItem.description}</CardText>
          <Button >
              <ImageUploader/>
            </Button>
        </CardBody>
        </Card>
       </>
         
    )}

 
export default HomeGalleryChild;
