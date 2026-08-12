import { useState, useEffect } from "react";
import withLogger from "./withLogger";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo-container">

      <h1 className="todo-title">My Todo List</h1>

      <div className="input-section">
        <input
          className="task-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Your Tasks"
        />

        <button
          className="add-btn"
          onClick={() => {
            if (editingIndex === null) {
              setTasks([...tasks, task]);
            } else {
              const updatedTasks = tasks.map((item, index) =>
                index === editingIndex ? task : item
              );

              setTasks(updatedTasks);
              setEditingIndex(null);
            }

            setTask("");
          }}
        >
          {editingIndex === null ? "Add Task" : "Update Task"}
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            onEdit={() => {
              setTask(item);
              setEditingIndex(index);
            }}
            onDelete={() => {
              setTasks(tasks.filter((_, i) => i !== index));
            }}
          />
        ))}
      </ul>

    </div>
  );
}

export default withLogger(App);