import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useState } from "react";
import React from "react";


const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => setRefresh(!refresh);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Task Manager</h1>
      <TaskForm refreshTasks={refreshTasks} />
      <TaskList key={refresh} />
    </div>
  );
};

export default Home;
