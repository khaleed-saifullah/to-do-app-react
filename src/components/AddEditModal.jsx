import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEditModal({ show, closeModal, addTask, from, task, editTask }) {
  useEffect(() => {
    if (from == "edit") {
      setTaskName(task.name);
      setTaskPriority(task.priority);
    }
  }, []);

  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  function clearData() {
    setTaskName("");
    setTaskPriority("");
  }
  return (
    <>
      <Modal show={show} onHide={clearData}>
        <Modal.Header>
          <Modal.Title>{from == "add" ? "Add" : "Edit"} Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Task Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              onChange={(e) => setTaskPriority(e.target.value)}
              value={taskPriority}
            >
              <option>Select an option</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              if (from == "add") clearData();
              closeModal();
            }}
          >
            Close
          </Button>
          {from == "add" ? (
            <Button
              variant="primary"
              onClick={() => {
                clearData();
                addTask(taskName, taskPriority);
              }}
            >
              Add Task
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => editTask(taskName, taskPriority, task.index)}
            >
              Edit Task
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEditModal;
