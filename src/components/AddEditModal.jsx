import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEditModal({ show, closeModal, addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
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
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option>Select an option</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => addTask(taskName, taskPriority)}
          >
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEditModal;
