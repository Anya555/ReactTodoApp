import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FileUploader from "react-firebase-file-uploader";
import { FcTodoList } from "react-icons/fc";
import { BsUpload } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import fire from "../firebase";
import "./form.css";

const Img = (props) => {
  const [avatar, setFile] = useState("");

  const handleInputChange = (e) => {
    const image = e.target.files[0];
    setFile((newFile) => image);
  };

  const upload = () => {
    fire.storage
      .ref("images" + fire.auth.currentUser.uid)
      .put(avatar)
      .then(props.history.replace("./dashboard"));
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
export default withRouter(Img);
