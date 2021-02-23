import React, { useState, useEffect } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ProductEdit = (props) => {

    
    const [editName, setEditName] = useState(props.productToUpdate.name);
    const [editPrice, setEditPrice] = useState(props.productToUpdate.price);
    const [editDescription, setEditDescription] = useState(props.productToUpdate.description);
    const [editPhotoURL, setEditPhotoURL] = useState('img.jpg');
    const [editInStock,setEditInStock] = useState(props.productToUpdate.availability);
    const [editPublish, setEditPublish] = useState(props.productToUpdate.adminDisplay);

    const [isChecked, setIsChecked] = useState(false);


    const productUpdate = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3000/product/edit/${props.productToUpdate.id}`, {
            method:'PUT',
            body: JSON.stringify({
                product:{
                    name: editName, 
                    price: editPrice, 
                    description: editDescription,
                    availability: editInStock,
                    photoURL: editPhotoURL,
                    adminDisplay: editPublish
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.getListOfProducts();
            props.updateOff();
        })
    }

    const setRadioButton = () =>{
        props.productToUpdate.availability ? setIsChecked(true) : setIsChecked(false);
    }

    const onValueChange = (e) => {
        e.target.value === 'inStock' ? setEditInStock(true) : setEditInStock(false);
    }

    useEffect( () => {
        setRadioButton();
    }, [])

    return ( 
        <>
        <Modal isOpen={true}>
             <ModalHeader>Edit your product</ModalHeader>
             <ModalBody>
                <Form onSubmit={productUpdate}> 
                     <FormGroup>
                         <Label htmlFor="name">Edit name</Label>
                         <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                     </FormGroup>

                     <FormGroup>
                         <Label htmlFor="price">Edit price</Label>
                         <Input type="number" min="0" name='price' value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
                     </FormGroup>
                     <FormGroup>
                         <Label htmlFor="description">Edit description</Label>
                         <Input type="textarea" name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                     </FormGroup>
                    
                     <FormGroup >
                        <legend>Edit availability</legend>
                        <FormGroup check>
                        <Label htmlFor='availability' check>
                            <Input type="radio" name="availability" value='inStock' defaultchecked={isChecked} onChange={(e) => onValueChange(e)}/>{' '}
                            In Stock
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="availability" value='OutOfStock' onChange={(e) => onValueChange(e)}/>{' '}
                            Out of Stock
                        </Label>
                        </FormGroup>
                    </FormGroup>
                     {/* <FormGroup>
                         <Label htmlFor="photoURL">Upload image</Label>
                         <Input type="file" accept='image/*' name="file" value={editPhotoURL} onChange={(e) => setEditPhotoURL(e.target.value)}  />
                         <FormText color="muted">
                         Upload any image file.
                         </FormText>
                     </FormGroup> */}
                     {/* <FormGroup check>
                         <Label htmlFor='publish' check>
                         <Input type="checkbox" value={editPublish} onChange={(e) => setEditPublish(e.target.value)} />{' '}
                         Publish?
                         </Label>
                     </FormGroup> */}
                     <br />
                     <Button type="submit">Update!</Button>
                 </Form>
             </ModalBody>
        </Modal>
        </>
     );
}
 
export default ProductEdit;