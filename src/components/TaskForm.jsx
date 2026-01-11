import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    });

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow mb-6"
    >
      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full border p-3 rounded mb-3"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
