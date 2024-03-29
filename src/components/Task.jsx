import { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import AddEditModal from "./AddEditModal";

const Task = ({
  taskName,
  taskPriority,
  isComplete,
  itemDelete,
  itemEdit,
  taskIndex,
  toggleComplete,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (showEditModal) {
      setShowEditModal(false);
    }
  }, [itemEdit]);

  function deleteTask(index) {
    itemDelete(index);
    setShowDeleteModal(false);
  }
  return (
    <div>
      <div className="task-list">
        <div className="task-list-details">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked"
              defaultChecked={isComplete}
              onChange={() => toggleComplete(taskIndex)}
            />
          </div>
          <div className="task-list-info">
            <p>
              <span className={isComplete ? "task-name complete" : "task-name"}>
                {taskName}
              </span>
              <span
                className={
                  taskPriority == "low"
                    ? "badge rounded-pill ms-2 text-bg-primary"
                    : taskPriority == "medium"
                    ? "badge rounded-pill ms-2 text-bg-secondary"
                    : "badge rounded-pill ms-2 text-bg-danger"
                }
              >
                {taskPriority}
              </span>
            </p>
          </div>
        </div>
        <div className="task-list-action">
          <button
            className="btn btn-info me-2"
            onClick={() => setShowEditModal(!showEditModal)}
          >
            <i className="bi bi-pencil-fill" />
          </button>
          <AddEditModal
            show={showEditModal}
            closeModal={() => setShowEditModal(false)}
            task={{ name: taskName, priority: taskPriority, index: taskIndex }}
            from={"edit"}
            editTask={itemEdit}
          />
          <button
            className="btn btn-danger"
            onClick={() => setShowDeleteModal(!showDeleteModal)}
          >
            <i className="bi bi-trash-fill" />
          </button>
          <DeleteModal
            showDeleteModal={showDeleteModal}
            closeDeleteModal={() => setShowDeleteModal(false)}
            index={taskIndex}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
