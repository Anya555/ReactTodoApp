import React, { useState } from 'react';
import './dashboard.css';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { FcTodoList } from 'react-icons/fc';
import { IoIosLogIn } from 'react-icons/io';

const Dashboard = (props) => {

    const [file, setFile] = useState('');

    if (!firebase.getCurrentUsername()) {
        alert('Please login first')
        props.history.replace('/')
        return null
    }

    const uploadHandler = () => {
        console.log(file)
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
                        <h3>{firebase.getCurrentUsername()}</h3>
                        <Form>
                            <Form.Group controlId="formBasicFile">
                                <Form.File
                                    id="custom-file"
                                    label="Select image"
                                    custom
                                    value={file}
                                    onChange={e => setFile(e.target.value)}
                                />
                                <Button onClick={e => uploadHandler(e)}>Upload</Button>
                            </Form.Group>

                        </Form>
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