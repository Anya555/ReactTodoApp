import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './signup.css';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const SignUp = () => {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e, username, email, password) =>{
    e.preventDefault();
    setUsername('');
    setEmail('');
    setPassword('');
}

const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === "userName"){
        setUsername(value);
    }else if (name === "userEmail"){
        setEmail(value);
    }else if (name === "userPassword"){
        setPassword(value);
    }
}

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
                                        <Form.Label className="email">Full name</Form.Label>
                                        <Form.Control 
                                        type="name" 
                                        placeholder="Enter your full name" 
                                        name="userName"
                                        value={username}
                                        onChange={(e) => handleChange(e)}
                                        required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="email">Email address</Form.Label>
                                        <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        name="userEmail"
                                        value={email}
                                        onChange={(e) => handleChange(e)}
                                        required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="password">Password</Form.Label>
                                        <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        name="userPassword"
                                        value={password}
                                        onCHange={(e) => handleChange(e)}
                                        required
                                        />
                                    </Form.Group>

                                    <Button onClick = {(e) => {handleSubmit(e, username, email, password)}}
                                    variant="primary" 
                                    type="submit">
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