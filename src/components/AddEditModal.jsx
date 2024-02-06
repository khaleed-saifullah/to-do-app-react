import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEditModal({ show, closeModal }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Task Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select className="form-select">
              <option selected="">Select an option</option>
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEditModal;
