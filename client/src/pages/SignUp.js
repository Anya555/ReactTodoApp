import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import './signin.css';
import firebase from '../firebase';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { FcTodoList } from 'react-icons/fc';
import { IoIosLogIn } from 'react-icons/io';

const SignUp = (props) => {

    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const handleSubmit = e => {
        e.preventDefault();
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-sm-4 col-sm-12">
                        <br></br><br></br>

                        <Card className="text-center">
                            <Card.Header><FcTodoList className="list-icon" />ToDo List</Card.Header>
                            <Card.Body>

                                <Form onSubmit={e => handleSubmit(e)}>
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label className="email">Full name<span className="ast">*</span></Form.Label>
                                        <Form.Control
                                            type="name"
                                            name="name"
                                            value={name}
                                            onChange={e => setUsername(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="email">Email address<span className="ast">*</span></Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="password">Password<span className="ast">*</span></Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    
                                    <Button
                                        onClick={onRegister}
                                        variant="primary"
                                        type="submit"
                                        className="login"
                                    >
                                        <IoIosLogIn className="lock" />
                                        Sign Up
                                    </Button>
                                </Form>


                            </Card.Body>
                            <Card.Footer>Already have an account?
                            <Link to='/'> Sign in here</Link> </Card.Footer>
                        </Card>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
    async function onRegister() {
        try {
            await firebase.register(name, email, password)
            props.history.replace('/dashboard')
        } catch (error) {
            alert(error.message)
        }
    }
}
export default withRouter(SignUp);