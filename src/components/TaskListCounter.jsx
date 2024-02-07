const TaskListCounter = ({ totalTask, completedTask }) => {
  return (
    <div className="task-counter">
      <p>Total Task : {totalTask}</p>
      <p>Completed Task : {completedTask}</p>
    </div>
  );
};

export default TaskListCounter;
