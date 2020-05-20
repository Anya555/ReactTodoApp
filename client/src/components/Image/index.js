import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { FcCompactCamera } from "react-icons/fc";
import "./style.css";
import fire from "../../firebase";

class ProfileImage extends Component {
  state = {
    avatar: "",
    avatarURL: "",
  };

  // fileChangedHandler = event => {
  //     this.setState({ image: event.target.files[0] })
  // }

  // uploadHandler = () => {
  //     const formData = new FormData()
  //     formData.append(
  //         'myFile',
  //         this.state.image,
  //         this.state.image.name,
  //     )
  //     axios.post('https://us-central1-todolist-4b3b2.cloudfunctions.net/uploadFile', formData)
  //         .then(res => {
  //             console.log(res);
  //         })
  // }
  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename });
    firebase
      .storage()
      .ref("images" + fire.auth.currentUser.uid)
      .child(filename)
      .getDownloadURL()
      .then((url) => this.setState({ avatarURL: url }));
  };
  render() {
    return (
      <>
        <Form>
          <Image
            roundedCircle
            src={this.state.avatarURL || "./images/avatar.jpg"}
            height="80px"
            width="80px"
          />
          {/* <Form.Group controlId="formBasicFile">
                        <Form.File
                            id="custom-file"
                            onChange={this.fileChangedHandler}
                        />
                        <Button onClick={this.uploadHandler}>Upload image</Button>
                    </Form.Group> */}

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
              onUploadSuccess={this.handleUploadSuccess}
            />
          </label>
        </Form>
      </>
    );
  }
}

export default ProfileImage;
