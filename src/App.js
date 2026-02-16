import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Simple To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            toggleTask={() => toggleTask(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
