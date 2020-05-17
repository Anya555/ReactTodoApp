import React, { useState, useEffect } from 'react';
import './dashboard.css';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom';
import ProfileImage from '../components/Image/index';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FcTodoList } from 'react-icons/fc';
import { IoIosLogIn } from 'react-icons/io';

import Card from 'react-bootstrap/Card'


const Dashboard = (props) => {

    const[todos, setTodos] = useState([]);

    useEffect(() => {displayAll()}, []);

    function displayAll() {
        firebase.displayAllTodos().then(setTodos)
    }

    return (

        <>
            <Navbar>

                <Navbar.Brand><FcTodoList className="list-icon" />ToDo List</Navbar.Brand>

                <Button className="login logout ml-auto" onClick={logout}><IoIosLogIn className="lock" />Sign Out</Button>

            </Navbar>
          
         <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-12">
                    
                    <Card className="text-center user-card">
                    <ProfileImage/>
                    <h6>{firebase.getCurrentUsername()}</h6>
                   </Card>
                    
                  
                    </div>
                </div>
            </div>

        </>
    )
    async function logout() {
        await firebase.logout()
        props.history.push('/')
    }

}
export default withRouter(Dashboard);