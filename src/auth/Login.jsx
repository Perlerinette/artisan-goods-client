import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {useHistory} from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        props.setUserEmail(email);

        fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({
             email: email, 
             password: password ,
            }),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              console.log(data.sessionToken);
              props.updateToken(data.sessionToken);
              history.push('/MyShop');
            });
            
          }

    return(
    
        <div className="login" style={{borderRadius: "15px", padding: "20px"}} >
            <h1 style={{textAlign: "center"}}>Login</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email" value={email} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e)=>setPassword(e.target.value)} type="password" minLength={'4'} name="password" placeholder="Password" value={password} required/>
                </FormGroup>
                <div className="align-middle text-center" style={{padding: 50}}>
                <Button  style={{width: 100, backgroundColor: "#4a5759",color: "white"}} type="submit" >Login</Button>
                </div>
            </Form>
        </div>
        
    )
}

export default Login;
