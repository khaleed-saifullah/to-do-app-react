const TaskListCounter = ({ totalTask, completedTask }) => {
  return (
    <div className="task-counter">
      <p>
        Total Task : <b>{totalTask}</b>
      </p>
      <p>
        Completed Task : <b>{completedTask}</b>
      </p>
    </div>
  );
};

export default TaskListCounter;
