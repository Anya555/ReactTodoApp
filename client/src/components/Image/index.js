import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { FcCameraIdentification } from 'react-icons/fc';
import './style.css'

class ProfileImage extends Component {

    state = {
        image: null,
        avatarURL: "",
        avatar: ''
    };


    // componentDidMount = () => {
    //     if (!this.state.avatarURL) {
    //         this.setState({ avatarURL: 'https://via.placeholder.com/150' })
    //     } else {
    //         firebase.storage().ref('gs://todolist-4b3b2.appspot.com/images').getDownloadURL().then(url => this.setState({ avatarURL: url }));
    //     }
    // }

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

    // handleUpload = (() => {

    //    firebase.storage().ref().getDownloadURL().then(url => this.setState({ avatarURL: url }));
    // });

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
          .then(url => this.setState({ avatarURL: url }));
      };


    render() {
        return (
            <>
                <Form>
                <Image roundedCircle src={this.state.avatarURL || './images/avatar.jpg'} height="150px" width="150px"/>
                    {/* <Form.Group controlId="formBasicFile">
                        <Form.File
                            id="custom-file"
                            onChange={this.fileChangedHandler}
                        />
                        <Button onClick={this.uploadHandler}>Upload image</Button>
                    </Form.Group> */}
                   
            <label><FcCameraIdentification className="camera"/>
           
  
                    <FileUploader
                        hidden
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                    />
                    </label>
                </Form>
              
            </>
        )

    }
}

export default ProfileImage