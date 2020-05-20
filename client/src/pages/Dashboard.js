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
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Moment from "react-moment";
import { BsTrashFill } from "react-icons/bs";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { FcCompactCamera } from "react-icons/fc";

const Dashboard = (props) => {
  const [todos, setTodos] = useState([]);
  // const [avatar, setAvatar] = useState("");
  // const [avatarURL, setAvatarURL] = useState("");

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

  // const handleUploadSuccess = (filename) => {
  //   setAvatar({ avatar: filename });
  //   firebase
  //     .storage()
  //     .ref("images" + fire.auth.currentUser.uid)
  //     .child(filename)
  //     .getDownloadURL()
  //     .then((url) => setAvatarURL({ avatarURL: url }));
  // };

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
        {/* <Form>
          <Image
            roundedCircle
            src={avatarURL || "./images/avatar.jpg"}
            height="80px"
            width="80px"
          />
          <label>
            <FcCompactCamera className="camera" />

            <FileUploader
              hidden
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase
                .storage()
                .ref("images" + fire.auth.currentUser.uid)}
              onUploadSuccess={handleUploadSuccess}
            />
          </label>
        </Form> */}
        <Button className="login logout ml-auto" onClick={logout}>
          <IoIosLogIn className="lock" />
          Sign Out
        </Button>
      </Navbar>

      <br></br>

      <div className="container-fluid">
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

          {todos.map((todo) => {
            return (
              <div className="col-md-4 col-sm-12">
                <Card key={todo.id}>
                  <Card.Header>
                    {todo.title}
                    <BsTrashFill className="delete" onClick={deleteFromList} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{todo.body}</Card.Text>
                  </Card.Body>
                </Card>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  // async function uploadImage() {
  //   await fire.uploadImage(avatar);
  // }
  async function logout() {
    await fire.logout();
    props.history.push("/");
  }
};
export default withRouter(Dashboard);
