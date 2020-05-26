import React, { useState } from "react";
import firebase from "../firebase";
import { withRouter } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcTodoList } from "react-icons/fc";
import "./form.css";

const CreateTodo = (props) => {
  const [formObject, setFormObject] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  // adds todo to firebase storage
  const addToDb = (e) => {
    e.preventDefault();
    firebase
      .addTodo(formObject)
      .then(() => props.history.replace("/dashboard"));
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
                <Form onSubmit={addToDb}>
                  <Form.Label>Add title</Form.Label>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="title"
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <br></br>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows="7"
                      type="text"
                      name="body"
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <br></br>
                  <Button className="login add-to-list" type="submit">
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
};

export default withRouter(CreateTodo);
