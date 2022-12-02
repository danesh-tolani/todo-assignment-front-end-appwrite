import React from "react";
import arrow from "./arrow.png";
import "./Todo.css";

const Todo = ({ todo, setHome, currentTodo, setAddTodo }) => {
  const change = () => {
    setHome(todo);
    setAddTodo(false);
  };

  return (
    <div className="glass flex flex-col gap-2 items-start cursor-pointer select-none py-4 px-10 rounded-2xl mx-2" onClick={() => (todo._id === currentTodo._id ? setHome({}) : change())}>
      <h1 className="font-bold text-3xl text-left">{todo.title}</h1>
      <div className="flex flex-col items-start">
        <h3 className="font-semibold text-xl ">Tasks</h3>
        {todo.tasks.map((task, index) => {
          return (
            <div className="flex items-start text-left " key={index}>
              <img src={arrow} alt="" className="rotate-180 w-3 relative top-2" />
              <p key={index}>{task}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
