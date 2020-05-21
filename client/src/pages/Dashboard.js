import React, { useState, useEffect } from "react";
import "./dashboard.css";
import fire from "../firebase";
import { withRouter, Link } from "react-router-dom";
import ProfileImage from "../components/Image/index";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FcTodoList } from "react-icons/fc";
import { IoIosLogIn } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import { BsTrashFill } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";

const Dashboard = (props) => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const date = new Date();

  useEffect(() => {
    displayAll();
  }, []);

  const displayAll = () => {
    fire
      .displayAllTodos()
      .then((list) => {
        setTodos(list);
        console.log(list);
      })
      .catch((err) => console.log(err));
  };

  const deleteFromList = () => {
    fire.deleteTodo();
  };

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <FcTodoList className="list-icon" />
          ToDo List
          <br></br>
          <h6>{fire.getCurrentUsername()}</h6>
        </Navbar.Brand>
        <ProfileImage />
        <Button className="login logout ml-auto" onClick={logout}>
          <IoIosLogIn className="lock" />
          Sign Out
        </Button>
      </Navbar>

      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-sm-2">
            <h5 className="moment">
              <Moment format="dddd, MMMM Do">{date}</Moment>
            </h5>
          </div>
          <div className="col-md-2 col-sm-12">
            <Link to="/CreateTodo">
              <Button className="add">+</Button>
            </Link>
          </div>
          <div className="col-md-12">
            <hr></hr>
          </div>
          <br></br>
          <br></br>
          <br></br>

          {todos.map((todo) => {
            return (
              <div className="col-md-3 col-sm-12">
                <Card key={todo.id} className="todo-card">
                  {todo.title}
                  <br></br>
                  <Button variant="link" onClick={handleShow} className="view">
                    View
                  </Button>
                </Card>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>{todo.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{todo.body}</Modal.Body>
                  <Modal.Footer>
                    <BsTrashFill className="delete" onClick={deleteFromList} />
                  </Modal.Footer>
                </Modal>

                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
  async function logout() {
    await fire.logout();
    props.history.push("/");
  }
};
export default withRouter(Dashboard);
