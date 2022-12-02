import axios from "axios";

const createTask = async (id, task) => {
  const response = axios.post(`/addTask/${id}`, { task });
  return response;
};

const editTask = async (id, tasks) => {
  axios
    .put(`/updateTask/${id}`, { tasks })
    .then(() => {
      console.log({ message: "Task edited successfully", tasks });
    })
    .catch((error) => {
      console.log(error);
    });
};

export { createTask, editTask };
