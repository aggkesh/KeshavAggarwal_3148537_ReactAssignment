import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function SignIn() {
    return(
        <Card className="m-4 p-4">
            <h2 className="m-3 font-weight-bold">SignIn</h2>
            <Form className="m-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="font-weight-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </Card>
    )
}

export default SignIn