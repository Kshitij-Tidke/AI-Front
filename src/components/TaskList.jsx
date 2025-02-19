import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../services/api";
import TaskItem from "./TaskItem";
import React from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggle = async (id, completed) => {
    await updateTask(id, { completed: !completed });
    fetchTasks();
  };

  const handleUpdate = async (id, updates) => {
    await updateTask(id, updates);
    fetchTasks();
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Task List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
