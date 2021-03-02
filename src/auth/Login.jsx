import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { LockFill, PersonFill, EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import {useHistory} from 'react-router-dom';

const Login = (props) => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    // show/hide password
    const [type, setType] = useState('password');
    const [isPwdVisible, setIsPwdVisible] = useState(false);
    const showPwd = () => {
        setIsPwdVisible(!isPwdVisible);
        isPwdVisible ? setType('password') : setType('text');
    }
    const toggleIcon = () => isPwdVisible ? <EyeSlashFill /> : <EyeFill />;


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
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><PersonFill /></InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email" value={email} required />
                  </InputGroup>
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><LockFill /></InputGroupText>
                    </InputGroupAddon>
                    <Input onChange={(e)=>setPassword(e.target.value)} type={type} minLength={'4'} name="password" placeholder="****" value={password} required />
                    <InputGroupAddon addonType="append" >
                            <InputGroupText ><span style={{cursor:'pointer'}} onClick={showPwd}>{toggleIcon()}</span></InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
              </FormGroup>

              <div className="align-middle text-center">
              <Button className="submitBtn" type="submit">Login</Button>
              </div>
            </Form>
        </div>
        
    )
}

export default Login;
