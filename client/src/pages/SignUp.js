import React,{useState} from 'react';
import { Link,  withRouter } from "react-router-dom";
import './signup.css';
import firebase from '../firebase';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const SignUp = (props) => {

const [name, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) =>{
    e.preventDefault();
    // setUsername('');
    // setEmail('');
    // setPassword('');
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

                                <Form onSubmit={e => handleSubmit(e)}>
                                <Form.Group controlId="formBasicUsername">
                                        <Form.Label className="email">Full name</Form.Label>
                                        <Form.Control 
                                        type="name" 
                                        placeholder="Enter your full name" 
                                        name="name"
                                        value={name}
                                        onChange={e =>setUsername(e.target.value)}
                                        required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="email">Email address</Form.Label>
                                        <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="password">Password</Form.Label>
                                        <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        />
                                    </Form.Group>

                                    <Button 
                                    onClick={onRegister}
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
    async function onRegister() {
		try {
			await firebase.register(name, email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}
export default withRouter(SignUp);