import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;
const NODE_ENV = import.meta.env.VITE_NODE_ENV;
const BASE_API_URL = NODE_ENV ===  "development" ? "/api/v1/task" : `${import.meta.env.VITE_API_URL}api/v1/task`
console.log({
  NODE_ENV,
  BASE_API_URL
});


export const getTasks = async () => {
  const response = await axios.get(`${BASE_API_URL}`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(BASE_API_URL, task);
  return response.data;
};

export const updateTask = async (id, updates) => {
  const response = await axios.put(`${BASE_API_URL}/${id}`, updates);
  return response.data;
};


export const deleteTask = async (id) => {
  const response = await axios.delete(`${BASE_API_URL}/${id}`);
  return response.data;
};
