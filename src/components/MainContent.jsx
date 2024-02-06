import { useState } from "react";
import AddEditModal from "./AddEditModal";
import Task from "./Task";

const MainContent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="main-content">
        <div className="tasks-header">
          <div className="row">
            <div className="col-md-6">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                Add Task
              </button>
              {/*Add Task Modal */}
              <AddEditModal show={show} closeModal={() => setShow(false)} />
            </div>
            <div className="col-md-6">
              <div className="tasks-header-filtering-option">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected="">Select Priority</option>
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="task-lists-wrapper">
              <Task />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
