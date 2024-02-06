const Task = () => {
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
            />
          </div>
          <div className="task-list-info">
            <h4>
              Task One{" "}
              <span className="badge rounded-pill text-bg-primary">
                Primary
              </span>
            </h4>
            <span>5.32 AM , 01/06/2024</span>
          </div>
        </div>
        <div className="task-list-action">
          <button
            className="btn btn-info me-2"
            data-bs-toggle="modal"
            data-bs-target="#editTaskModal"
          >
            <i className="bi bi-pencil-fill" />
          </button>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteTaskModal"
          >
            <i className="bi bi-trash-fill" />
          </button>
          {/* Edit Task Modal */}
          <div
            className="modal fade"
            id="editTaskModal"
            tabIndex={-1}
            aria-labelledby="editTaskModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit task
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
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
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
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
