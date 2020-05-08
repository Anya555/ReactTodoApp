import React from 'react';
import { Link } from "react-router-dom";
import './signup.css';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    return(
        <>
      <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-sm-4 col-sm-12">
                        <br></br><br></br><br></br>

                        <Card className="text-center">
                            <Card.Header>ToDo List</Card.Header>
                            <Card.Body>

                                <Form>
                                <Form.Group controlId="formBasicUsername">
                                        <Form.Label className="email">Username</Form.Label>
                                        <Form.Control type="name" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="email">Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="password">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Sign In
                                    </Button>
                                </Form>


                            </Card.Body>
                            <Card.Footer className="text-muted">Already have an account? 
                            <Link to='/'> Sign in here</Link> </Card.Footer>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;