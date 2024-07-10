// src/components/Todo.js
import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)} id="complete">Complete</button>
        <button onClick={() => removeTodo(index)} id="x">x</button>
      </div>
    </div>
  );
};

export default Todo;
