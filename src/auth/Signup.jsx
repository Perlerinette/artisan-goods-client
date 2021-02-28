import React, { useState } from 'react';
import {Container, Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { LockFill, PersonFill, Eye, EyeSlash } from 'react-bootstrap-icons';
import {useHistory} from 'react-router-dom';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        props.setUserEmail(email);

        fetch("http://localhost:3000/user/signup/", {
            method: "POST",
            body: JSON.stringify({
            email: email, password: password ,
            }),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              props.updateToken(data.sessionToken);
              history.push('/MyShop');
            })
            .catch(err=> console.log(err));
    }

    return(
        <div>
        <div className="signUp" style={{borderRadius: "15px", padding: "20px"}}>
            <h1 style={{textAlign: "center"}}>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><PersonFill /></InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email" value={email} required  />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><LockFill /></InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={(e)=>setPassword(e.target.value)} type="password" minLength={'4'} name="password" placeholder="****" value={password} required/>
                        <Eye/>
                    </InputGroup>
                </FormGroup>
                <div className="align-middle text-center">
                <Button className="submitBtn" type="submit">Signup</Button>
                </div>
            </Form>
        </div>
        </div>
    )
}

export default Signup;