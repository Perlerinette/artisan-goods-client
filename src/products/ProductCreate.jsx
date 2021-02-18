import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const ProductCreate = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [picURL, setPicURL] = useState('');
    const [inStock,setInStock] = useState('');
    const [publish, setPublish] = useState('');

    const handleSubmit = (e) => {

    }


    return ( 
        <>
            <h4>Have a new item for sale?</h4>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="price">Price</Label>
                    <Input type="number" min="0" name='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormGroup>
                <FormGroup >
                    <legend>Availability</legend>
                    <FormGroup check>
                    <Label htmlFor='inStock' check>
                        <Input type="radio" name="radio1" value={inStock} onChange={(e) => setInStock(e.target.value)}/>{' '}
                        In Stock
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Out of Stock
                    </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="picURL">Upload image</Label>
                    <Input type="file" accept='image/*' name="file" value={picURL} onChange={(e) => setPicURL(e.target.value)}  />
                    <FormText color="muted">
                    Upload any image file.
                    </FormText>
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor='publish' check>
                    <Input type="checkbox" onChange={(e) => setPublish(e.target.value)} />{' '}
                    Publish?
                    </Label>
                </FormGroup>
                <br />
                <Button type="submit">List it!</Button>
            </Form>
        </>
     );
}
 
export default ProductCreate;