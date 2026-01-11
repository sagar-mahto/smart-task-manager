const TaskItem = ({ task, deleteTask, toggleStatus }) => {
  const priorityColor =
    task.priority === "High"
      ? "text-red-600"
      : task.priority === "Medium"
      ? "text-yellow-600"
      : "text-green-600";

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
      <div>
        <h3
          className={`font-semibold ${
            task.completed && "line-through text-slate-400"
          }`}
        >
          {task.title}
        </h3>
        <p className={`text-sm ${priorityColor}`}>
          Priority: {task.priority}
        </p>
      </div>

      <div className="flex gap-3">
        <button onClick={() => toggleStatus(task.id)}>
          {task.completed ? "↩️" : "✅"}
        </button>
        <button onClick={() => deleteTask(task.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskItem;
