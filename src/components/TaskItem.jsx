import { useState } from "react";
import React from "react";


const TaskItem = ({ task, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdate(task.id, { title: newTitle, description: newDescription });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id, task.completed)}
            className="w-5 h-5 text-blue-500"
          />
          <span className={`text-lg ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </span>
        </div>
        <span className={`px-2 py-1 text-xs font-bold rounded ${task.completed ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
          {task.completed ? "Completed" : "Not Completed"}
        </span>
      </div>

      {/* Task Description */}
      <p className="text-gray-700 mt-2">{task.description}</p>

      <div className="flex gap-2 mt-3">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          onClick={() => setIsEditing(true)}
        >
          Update
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>

      {/* Update Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-2">Edit Task</h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded mb-2"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button className="bg-gray-400 text-white px-3 py-1 rounded" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" onClick={handleUpdate}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
