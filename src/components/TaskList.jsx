import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleStatus }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-slate-500">
        No tasks found.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
