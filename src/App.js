// src/App.js
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
