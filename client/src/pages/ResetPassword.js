import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../firebase";
import swal from "sweetalert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FcTodoList } from "react-icons/fc";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendResetEmail = (event) => {
    event.preventDefault();
    firebase.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailSent(true);
        setEmailSent(false);
        swal({
          title: "Email confirmation",
          text: "Please check your email for reset password link",
          icon: "success",
          button: "Ok",
        });
      })
      .then(() => {
        props.history.replace("/");
      })
      .catch((err) => {
        alert(err);
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
            <Card className="text-center">
              <Card.Header>
                {" "}
                <FcTodoList className="list-icon" /> ToDo List{" "}
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="email">
                      Email address<span className="ast">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="email-form"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button onClick={sendResetEmail} className="login">
                    Submit
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
export default withRouter(ResetPassword);
