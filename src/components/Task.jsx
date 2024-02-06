const Task = ({
  taskName,
  taskPriority,
  isComplete,
  itemDelete,
  itemEdit,
  taskIndex,
  toggleComplete,
}) => {
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
          <button className="btn btn-info me-2" onClick={itemEdit}>
            <i className="bi bi-pencil-fill" />
          </button>
          <button className="btn btn-danger" onClick={itemDelete}>
            <i className="bi bi-trash-fill" />
          </button>
          {/* Delete Task Modal */}
          <div
            className="modal fade"
            id="deleteTaskModal"
            tabIndex={-1}
            aria-labelledby="deleteTaskModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Delete task
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <h2>Are you sure to delete ?</h2>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
