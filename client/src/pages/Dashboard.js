import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
// import Avatar from "../components/Avatar/index";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TodoModal from "../components/TodoModal";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";
import { FcTodoList } from "react-icons/fc";
import { IoIosLogIn } from "react-icons/io";
import firebase from "../firebase";
import "./dashboard.css";
import { IoIosAddCircle } from "react-icons/io";

const Dashboard = (props) => {
  const [todos, setTodos] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  // moment js
  const date = new Date();

  useEffect(() => {
    displayAll();
  }, []);

  const handleShow = (todoToShow) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoToShow.id) {
        todo.show = !todo.show;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // render all todos from firestore
  const displayAll = () => {
    firebase
      .displayAllTodos()
      .then((list) => {
        list.forEach((todo) => {
          todo.show = false;
        });
        setTodos(list);
        console.log(list);
      })
      .catch((err) => console.log(err));
    getImgUrl();
  };

  // delete individual todo item from firestore
  const deleteFromList = (id) => {
    console.log(id);
    firebase.deleteTodo(id).then(() => {
      displayAll();
    });
  };

  // display image
  const getImgUrl = () => {
    firebase.storage
      .ref(
        firebase.storage.ref().child("images" + firebase.auth.currentUser.uid)
          .name
      )
      .getDownloadURL()
      .then((url) => setImgUrl(url));
  };

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <FcTodoList className="list-icon" />
          ToDo List
          <br></br>
          <h6>{firebase.getCurrentUsername()}</h6>
        </Navbar.Brand>
        <Image
          src={imgUrl || "./images/avatar.jpg"}
          height="80px"
          width="80px"
        />
        <label>
          <Link to="/AddAvatar">
            <IoIosAddCircle className="camera" />
          </Link>
        </label>
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
              <div className="col-md-3 col-sm-12" key={todo.id}>
                <Card className="todo-card">
                  {todo.title}
                  <br></br>
                  <Button
                    variant="link"
                    onClick={() => handleShow(todo)}
                    className="view"
                  >
                    View
                  </Button>
                </Card>
                <TodoModal
                  todo={todo}
                  handleShow={handleShow}
                  deleteFromList={deleteFromList}
                />
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
};
export default withRouter(Dashboard);
