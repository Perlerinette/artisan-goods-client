import { useEffect, useState } from "react";
import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Row, Col,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Modal from "react-modal";






const HomeGalleryChild = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

    return ( 
     
      <div className="Cards">
      <Card className="CardCss" style={{textAlign: "center" , width: '350px', height: "450px", padding: "0px", marginBottom: 20, boxShadow: " lightGrey 2px 2px"}}>
        <CardImg  src={props.productItem.photoURL}  width="350" height="270"  alt="Card image" />

        <CardBody className="CardBody" style = {{background: "white"}} >
          <CardTitle tag="h5" style={{fontSize: 17}}>{props.productItem.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${props.productItem.price}</CardSubtitle>
          <CardText>
            {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
            </CardText>
            <Button style={{background: "#4A5759"}} onClick={toggle}>{buttonLabel}See Full Description</Button>
           {/* <Button style={{background: "#4A5759"}} onClick={toggleModal}>See Full Description</Button> */}
        </CardBody>
      </Card>
       
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{backgroundColor: "#f7e1d7", marginLeft: 0, marginRight: 0}} toggle={toggle}>{props.productItem.name}</ModalHeader>
        
        <ModalBody style={{textAlign: "center"}}>
          <img style={{ width:350, height:270}}src={props.productItem.photoURL}></img>
          <br/>
          <br/>
          <div>
      
        {props.productItem.description}
        <br/>
        {props.productItem.availability === true ? <p className='text-success'>In stock</p> : <p className='text-danger'>Out of stock</p>}
        ${props.productItem.price}
        </div>
        </ModalBody>
        <ModalFooter style={{backgroundColor: "#f7e1d7", marginLeft: 0, marginRight: 0}}>
          <Button style={{backgroundColor: "#4a5759", color: "white", width: 150, height: 40, textAlign: "center"}}  color="primary" onClick={toggle}>Close</Button>{' '}
         
        </ModalFooter>
      </Modal>
     
   
       
        {/* <Modal style={{width: 600}}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
    

        
         
        >
        <div>
        <Card  className="cardModal" style={{width: 500}}>
        <CardBody style={{textAlign: 'center'}}>
          <CardImg src={props.productItem.photoURL} alt="card image" style={{width:   '450px', height: '300px', padding: "20px"  }}  /> 
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
        <div className='align-middle text-center'>
        <button style={{backgroundColor: "#4a5759", color: "white", width: 150, height: 40}} onClick={toggleModal}>Close</button>
        </div>
        </Modal> */}
        </div>
      
        
      );
    };

 
export default HomeGalleryChild;