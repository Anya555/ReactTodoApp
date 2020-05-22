import React from "react";
import Modal from "react-bootstrap/Modal";
import { BsTrashFill } from "react-icons/bs";

const TodoModal = (props) => {
  return (
    <>
      <Modal
        show={props.todo.show}
        onHide={() => props.handleShow(props.todo)}
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="title">{props.todo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.todo.body}</Modal.Body>
        <Modal.Footer>
          <BsTrashFill
            className="delete"
            onClick={() => props.deleteFromList(props.todo.id)}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TodoModal;
