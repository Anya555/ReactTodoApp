import React, { useState } from "react";
import firebase from "../firebase";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcTodoList } from "react-icons/fc";
import "./signin.css";

const CreateTodo = (props) => {
  const [formObject, setFormObject] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-sm-4">
            <br></br>
            <br></br>
            <br></br>
            <Card>
              <Card.Header>
                <FcTodoList className="list-icon" />
                TODO LIST
              </Card.Header>
              <Card.Body>
                <Form onSubmit={(e) => e.preventDefault}>
                  <Form.Label>Add title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                    required
                  ></Form.Control>
                  <br></br>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    type="text"
                    name="body"
                    onChange={handleInputChange}
                    required
                  ></Form.Control>
                  <br></br>
                  <Button className="login add-to-list" onClick={addTodo}>
                    Add to list
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
  async function addTodo() {
    try {
      await firebase.addTodo(formObject);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
};

export default withRouter(CreateTodo);
