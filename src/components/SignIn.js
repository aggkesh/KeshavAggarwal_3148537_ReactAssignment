import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { authenticate } from '../redux';
import { useHistory  } from 'react-router-dom';

function SignIn({ authData, authenticate }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const history = useHistory();
    
    if(authData.authenticated) {
        history.push('/dashboard')
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            authenticate(email, password, history);
        }
        setValidated(true);
      };

    return(
        <Card className="m-4 p-4">
            <h2 className="m-3 font-weight-bold">SignIn</h2>
            { authData && authData.error ? <Alert variant="danger">{ authData.error }</Alert> : <></> }
            <Form className="m-3"  noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={ email } onChange={e => { setEmail(e.target.value) }} required/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>                    
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="font-weight-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={ password } onChange={e => { setPassword(e.target.value) }} required/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (email, password, history) => dispatch(authenticate(email, password, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)