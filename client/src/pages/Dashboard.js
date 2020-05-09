import React from 'react';
import './dashboard.css';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Dashboard = (props) => {

    if(!firebase.getCurrentUsername()) {
		alert('Please login first')
		props.history.replace('/')
		return null
	}
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>ToDo List</Navbar.Brand>
            
                    <Button variant="outline-info" onClick={logout}>SignOut</Button>
                  
            </Navbar>
            <br></br>
            <h1>Hello { firebase.getCurrentUsername() }</h1>
        </>
    )
    async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}
export default withRouter(Dashboard);