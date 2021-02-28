import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ProductCreate = (props) => {

    //used in case no picture set in the card
    const photoNoAvail = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvcunited.club%2Fno-image-available-2-jpg%2F&psig=AOvVaw3sJr6JBH3tKhVKKDVyWw8L&ust=1614528594709000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDCzOy5iu8CFQAAAAAdAAAAABAI';

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [photoURL, setPhotoURL] = useState(photoNoAvail);
    const [inStock,setInStock] = useState(true);
    const [publish, setPublish] = useState(true);

    /* **********
    CLOUDINARY
    *********** */
    const [loading, setLoading] = useState(false);

    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'artisan-goods-cloudinary');
        setLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/natescloudinary/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json();

        setPhotoURL(file.secure_url);
        setLoading(false);
    }

    /* **********
    END CLOUDINARY
    *********** */

    const handleSubmit = (e) => {

        console.log('inStock', inStock);
        e.preventDefault();
        fetch("http://localhost:3000/product/create" , {
            method: 'POST',
            body: JSON.stringify({
                product:{
                    name: name, 
                    price: price, 
                    description: description,
                    availability: inStock,
                    photoURL: photoURL,
                    adminDisplay: publish
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then( (logData) => {
            console.log('logData -->', logData);
            setName('');
            setPrice(0);
            setDescription('');
            setInStock(true);
            setPhotoURL(photoNoAvail);
            setPublish(true);
            props.getListOfProducts();

        })
        .catch((err => { console.log(err);}))

    }

    const onValueChange = (e) => {
        e.target.value === 'inStock' ? setInStock(true) : setInStock(false);
        console.log('e.target.value', e.target.value);
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
                    <Label htmlFor="availability">Availability</Label>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="availability" value='inStock' defaultchecked onChange={(e) => onValueChange(e)}/>{' '}
                        In Stock
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="availability" value='OutOfStock'  onChange={(e) => onValueChange(e)}/>
                        Out of Stock
                    </Label>
                    </FormGroup>
                </FormGroup>

                {/* START CLOUDINARY          */}
                <FormGroup>
                    <Label htmlFor="photoURL">Upload image</Label>
                    <Input type="file" placeholder="Upload a photo" onChange={uploadImage}/>
                    {loading ? <h6>Loading...</h6> : <img src={photoURL} style={{width:'150px'}} style={{height:'150px'}} /> } 
                    </FormGroup>  
                    {/* END CLOUDINARY          */}
                    
                {/* <FormGroup check>
                    <Label htmlFor='publish' check>
                    <Input type="checkbox" value={publish} onChange={(e) => setPublish(e.target.value)} />{' '}
                    Publish?
                    </Label>
                </FormGroup> */}
                <br />
                <Button disabled={loading} type="submit">List it!</Button>
            </Form>
        </>
     );
}
 
export default ProductCreate;