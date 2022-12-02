import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import AddTodoForm from "./AddTodoForm";
import OpenedTodo from "./OpenedTodo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { searchTodo } from "../utils/handleApi";

const TodoList = ({ loggedIn }) => {
  const [todos, setTodos] = useState([]);
  const [home, setHome] = useState({});
  const [addTodo, setAddTodo] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    const query = prompt("Please enter the word to search");

    setSearch(query);
    const find = query;
    try {
      const response = await searchTodo(find);
      setTodos(response.data);
    } catch (error) {}
  };

  const getAllTodos = async () => {
    const response = await axios.get("/getTodos");
    setTodos(response.data);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  // * only when loggedIn is true the todos will be visible, else it will redirect to login page
  if (loggedIn) {
    return (
      <>
        <div className="flex justify-between md:flex-row flex-col">
          {/* Expanded Todo */}
          {addTodo ? <AddTodoForm todos={todos} setTodos={setTodos} /> : <OpenedTodo todo={home} getAllTodos={getAllTodos} setAddTodo={setAddTodo} setHome={setHome} />}

          {/* Creating right side scroll for displaying all the todos */}
          <div className="h-screen overflow-y-scroll flex flex-col gap-y-4 scroll-bar-custom py-4  w-screen  md:w-[30%]">
            {/* Onclick Functionality on clicking Add Todo */}
            <div className="flex justify-between">
              <div
                onClick={() => {
                  handleSearch();
                }}>
                <h1 className="add-todo-glass cursor-pointer select-none py-4 px-10 rounded-2xl mx-2 font-normal text-xl">Search Todo</h1>
              </div>
              <div
                onClick={() => {
                  !addTodo ? setAddTodo(true) : setAddTodo(false);
                  setHome({});
                }}>
                <h1 className="add-todo-glass cursor-pointer select-none py-4 px-10 rounded-2xl mx-2 font-normal text-xl">Add Todo</h1>
              </div>
            </div>
            {/* Generating Todos on right side scroll */}
            {todos &&
              todos.map((todo, index) => {
                return <Todo key={index} todo={todo} setHome={setHome} setAddTodo={setAddTodo} currentTodo={home} />;
              })}
          </div>
        </div>
      </>
    );
  } else {
    navigate("/");
  }
};
export default TodoList;
