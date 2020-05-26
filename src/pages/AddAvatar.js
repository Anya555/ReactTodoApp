import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FcTodoList } from "react-icons/fc";
import { BsUpload } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";
import "./form.css";

const AddAvatar = (props) => {
  const [avatar, setAvatar] = useState("");

  const handleInputChange = (e) => {
    const image = e.target.files[0];
    setAvatar(() => image);
  };

  // uploads image to firebase storage
  const upload = () => {
    firebase.storage
      .ref("images" + firebase.auth.currentUser.uid)
      .put(avatar)
      .then(() => {
        props.history.replace("/dashboard");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-sm-4 col-sm-12">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Card>
              <Card.Header>
                <FcTodoList className="list-icon" />
                ToDo List
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="file-input-card">
                    <label>
                      <Card className="file">
                        <span>
                          <BsUpload className="upload-icon" />
                          Select your avatar photo
                        </span>
                        <Form.File
                          id="custom-file"
                          hidden
                          onChange={handleInputChange}
                        />
                      </Card>
                    </label>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Button onClick={upload} className="login upload-btn">
                Upload avatar
              </Button>
              <br></br>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(AddAvatar);
