import { useEffect, useState } from "react";
import AddEditModal from "./AddEditModal";
import Task from "./Task";
import TaskListCounter from "./TaskListCOunter";

const MainContent = () => {
  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const totalTask = taskList.length;
  const completedTask = taskList.filter(
    (item) => item.isComplete == true
  ).length;

  useEffect(() => {
    if (show) {
      setShow(false);
    }
  }, [taskList]);

  // Add Task Fuction
  function addTask(taskName, taskPriority) {
    const newTaskList = [...taskList];
    newTaskList.push({
      name: taskName,
      priority: taskPriority,
      isComplete: false,
    });
    setTaskList(newTaskList);
  }

  // Edit Task Function
  function editTask(taskName, taskPriority, taskIndex) {
    const newTaskList = [...taskList];
    newTaskList[taskIndex].name = taskName;
    newTaskList[taskIndex].priority = taskPriority;

    setTaskList(newTaskList);
  }

  // Delete Task Function
  function itemDelete(index) {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }

  // Toggle Complete function
  function toggleComplete(index) {
    const newTaskList = [...taskList];
    newTaskList[index].isComplete = !newTaskList[index].isComplete;
    setTaskList(newTaskList);
  }

  return (
    <>
      <section className="main-content">
        <div className="tasks-header">
          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                Add Task
              </button>
              <AddEditModal
                show={show}
                closeModal={() => setShow(false)}
                addTask={addTask}
                from={"add"}
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
              <TaskListCounter
                totalTask={totalTask}
                completedTask={completedTask}
              />
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
                    itemEdit={editTask}
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
