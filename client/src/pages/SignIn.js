import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../firebase";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FcGoogle } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { IoIosLogIn } from "react-icons/io";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-sm-4 col-sm-12">
            <br></br>
            <br></br>
            <br></br>

            <Card className="text-center">
              <Card.Header>
                {" "}
                <FcTodoList className="list-icon" /> ToDo List{" "}
              </Card.Header>
              <Card.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
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

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="password">
                      Password<span className="ast">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button onClick={login} type="submit" className="login">
                    <IoIosLogIn className="lock" />
                    Sign In
                  </Button>

                  <br></br>
                  <br></br>
                  <div className="row">
                    <div className="col-md-4">
                      <hr></hr>
                    </div>
                    <div className="col-md-4">
                      <p>OR</p>
                    </div>
                    <div className="col-md-4">
                      <hr></hr>
                    </div>
                  </div>

                  <Button
                    onClick={signInWithGoogle}
                    className="g-btn"
                    variant="primary"
                    type="submit"
                  >
                    <FcGoogle className="google" />
                    Sign In with Google
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                Don't have an account?
                <Link to="/SignUp"> Sign Up here</Link>
                <br></br>
                <Link className="reset" to="/ResetPassword">
                  Forgot password?
                </Link>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  async function signInWithGoogle() {
    try {
      await firebase.signInWithGoogle();
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
};
export default withRouter(SignIn);
