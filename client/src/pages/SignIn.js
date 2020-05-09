import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../firebase';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const SignIn = (props) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // setEmail('');
    // setPassword('');
}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-sm-4 col-sm-12">
                        <br></br><br></br><br></br>

                        <Card className="text-center">
                            <Card.Header>ToDo List</Card.Header>
                            <Card.Body>

                                <Form onSubmit={e => handleSubmit(e)}>
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
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        />
                                    </Form.Group>

                                    <Button 
                                    onClick = {login}
                                    variant="primary" 
                                    type="submit">
                                        Sign In
                                    </Button>
                                </Form>


                            </Card.Body>
                            <Card.Footer className="text-muted">Don't have an account? 
                            <Link to='/SignUp'> SignUp here</Link> </Card.Footer>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
    async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}
export default withRouter(SignIn);