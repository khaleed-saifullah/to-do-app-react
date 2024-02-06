import { useEffect, useState } from "react";
import AddEditModal from "./AddEditModal";
import Task from "./Task";

const MainContent = () => {
  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (show) {
      setShow(false);
    }
  }, [taskList]);

  function addTask(taskName, taskPriority) {
    const newTaskList = [...taskList];
    newTaskList.push({
      name: taskName,
      priority: taskPriority,
      isComplete: false,
    });
    setTaskList(newTaskList);
  }

  function toggleComplete(index) {
    const newTaskList = [...taskList];
    newTaskList[index].isComplete = !newTaskList[index].isComplete;
    setTaskList(newTaskList);
  }

  function itemDelete(index) {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }

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
              <AddEditModal
                show={show}
                closeModal={() => setShow(false)}
                addTask={addTask}
              />
            </div>
            <div className="col-md-6">
              {/* <div className="tasks-header-filtering-option">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>Select Priority</option>
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="task-lists-wrapper">
              {taskList.map((item, index) => {
                return (
                  <Task
                    key={index}
                    taskName={item.name}
                    taskPriority={item.priority}
                    isComplete={item.isComplete}
                    taskIndex={index}
                    toggleComplete={toggleComplete}
                    itemDelete={itemDelete}
                    // itemEdit={() => editItem(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
