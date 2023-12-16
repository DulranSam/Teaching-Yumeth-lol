import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setTodos([
            ...todos,
            `Task ${todos.length > 0 ? todos.length + 1 : 1} added`,
          ]);
        }}
      >
        Add Task
      </button>
      <p>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </p>
    </div>
  );
};

export default Todos;
