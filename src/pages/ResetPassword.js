import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../firebase";
import swal from "sweetalert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FcTodoList } from "react-icons/fc";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // sends email with reset password link to user after email is submitted
  // swal - dependency to show email confirmation
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
      .catch((err) => {
        alert("Please enter email address to receive a link to reset password");
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
                  <br></br>
                  <Button onClick={sendResetEmail} className="login">
                    Submit email
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Link to="/">Return to Sign In</Link>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
