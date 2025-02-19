import { useState } from "react";
import { addTask } from "../services/api";
import React from "react";


const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;
    await addTask({ title, description, completed: false });
    setTitle("");
    setDescription("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-2">Add Task</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 border rounded mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
