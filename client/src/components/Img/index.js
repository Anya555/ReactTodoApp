import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import fire from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import { FcCompactCamera } from "react-icons/fc";

const Img = () => {
  const [avatar, setFile] = useState("");

  const handleInputChange = (e) => {
    const image = e.target.files[0];
    setFile((newFile) => image);
  };

  const upload = () => {
    fire.storage.ref("images" + fire.auth.currentUser.uid).put(avatar);
  };

  return (
    <>
      <Form.Group controlId="formBasicFile">
        <label>
          <FcCompactCamera className="camera" onChange={handleInputChange} />
          <Form.File id="custom-file" hidden />
          <Button onClick={upload}>Upload image</Button>
        </label>
      </Form.Group>
    </>
  );
};
export default Img;
