import React, { useState } from "react";
import "./AddTodoForm.css";
import { createTodo } from "../utils/handleApi";

const AddTodoForm = ({ setTodos, todos }) => {
  const [todoName, setTodoName] = useState();
  const [todoTasks, setTodoTasks] = useState([]);

  const submitData = async () => {
    const todo = todoName;

    let tasks = todoTasks.split(",").map(function (task) {
      return task.trim();
    });

    const response = await createTodo({ title: todo, tasks: tasks }); // this object goes to handleApi.js in form of todo object
    setTodoName("");
    setTodoTasks("");
    setTodos([...todos, response.data]); // * we are first destructuring all the values and adding the new todo and setting the state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitData();
  };

  return (
    <div className="flex md:pl-16 items-center justify-center md:justify-start md:w-[70%] pt-10 md:pt-0">
      <div className="w-[95%] md:w-[80%] h-[62%] rounded-2xl glass ">
        <h1 className="font-bold text-4xl pt-2">Add Todo</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 items-center h-[100%] mt-10">
          <div className="w-[90%] flex items-center justify-around">
            <h2 className="text-xl">Todo Title</h2>
            <input
              className="rounded-2xl px-4 py-5 border-none input-style w-[80%] text-3xl"
              type="text"
              value={todoName}
              onChange={(event) => {
                setTodoName(event.target.value);
              }}
            />
          </div>
          <div className="w-[90%] flex items-center justify-around">
            <h2 className="text-xl">Todo Task</h2>
            <input
              className="rounded-2xl px-4 p-5 border-none input-style w-[80%] text-xl"
              type="text"
              value={todoTasks}
              onChange={(event) => {
                setTodoTasks(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn mt-4">
            Submit
          </button>
          <p className="mt-5">Note: Add multiple tasks separated by ',' (comma)</p>
        </form>
      </div>
    </div>
  );
};

export default AddTodoForm;
