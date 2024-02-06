import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ showDeleteModal, deleteTask, index, closeDeleteModal }) {
  return (
    <>
      <Modal show={showDeleteModal}>
        <Modal.Header>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => deleteTask(index)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
