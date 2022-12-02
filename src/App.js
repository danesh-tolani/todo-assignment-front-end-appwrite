import "./App.css";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App w-screen  ">
        <div className="bg-blur ">
          <Routes>
            <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={<TodoList loggedIn={loggedIn} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
