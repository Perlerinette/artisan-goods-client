import React, {useState} from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {

    const [displayLogin, setDisplayLogin] = useState(false);
    const toggle = () => setDisplayLogin(!displayLogin);

    return(
        <Container className = "auth-container align-middle"  >
            {/* <Row >
                <Col md="6" >
                    <Signup updateToken={props.updateToken} setUserEmail={props.setUserEmail}/>
                </Col>
                <Col md="6" className="login-Col">
                    <Login updateToken={props.updateToken} setUserEmail={props.setUserEmail}/>
                </Col>
            </Row> */}
            <Row className='justify-content-md-center'>
                {displayLogin ? <Login updateToken={props.updateToken} setUserEmail={props.setUserEmail}/> : 
                        <Signup updateToken={props.updateToken} setUserEmail={props.setUserEmail}/> }
            </Row>
            <Row className='justify-content-md-center'>
                {displayLogin ? <a style={{cursor:'pointer'}} onClick={toggle}>New here? Register.</a>: <a style={{cursor:'pointer'}} onClick={toggle}>Already have an account? Log in.</a>}
            </Row>
        </Container>
    )
}

export default Auth;