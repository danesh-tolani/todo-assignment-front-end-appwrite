import axios from "axios";

// this todo is an object which contains title and tasks (coming from AddTodoForm.js)
const createTodo = async (todo, setTodos, todos) => {
  const response = axios.post("/createTodo", todo); // this todo goes as request body inside createTodoController.js
  return response;
};

const deleteTodo = async (id) => {
  axios
    .delete(`/deleteTodo/${id}`)
    .then(() => {
      console.log({ message: "Deleted Successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const editTitle = async (id, title) => {
  const response = axios.put(`/updateTodo/${id}`, { title });
  return response;
};

const getTodoById = async (id) => {
  const response = await axios.get(`/getTodos/:${id}`);
  return response;
};

const searchTodo = async (find) => {
  const response = await axios.post(`/searchTodos?find=${find}`);
  return response;
};

export { createTodo, deleteTodo, editTitle, getTodoById, searchTodo };
