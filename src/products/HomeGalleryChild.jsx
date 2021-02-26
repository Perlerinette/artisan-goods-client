import { useEffect, useState } from "react";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col} from 'reactstrap';
import Modal from "react-modal";




const HomeGalleryChild = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

    return ( 
      <>
        <Card>
        <CardBody>
          <CardImg src={props.productItem.photoURL} alt="card image" style={{width:   '100px'  }}/> 
          <CardTitle tag="h5">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
            
            <Button onClick={toggleModal}>See Full Description</Button>
        </CardBody>
      </Card>
      
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        >
        <div>
        <Card>
        <CardBody>
          <CardImg src={props.productItem.photoURL} alt="card image" style={{width:   '300px'  }}  /> 
          <CardTitle tag="h2">{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText tag="h4">Description:</CardText>
          <CardText tag="h6">{props.productItem.description}</CardText>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
        </CardBody>
      </Card>
        </div>
        <button onClick={toggleModal}>Close</button>
        </Modal>
        </>
      );
    };
 
export default HomeGalleryChild;
