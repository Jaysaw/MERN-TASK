import React, { useEffect, useState } from "react";
import "./TaskManager.css";

export default function TaskManager() {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = () => {
    if (!taskText.trim()) {
      alert("Task cannot be empty");
      return;
    }

    if (editId) {
      setTasks(tasks.map(t =>
        t.id === editId
          ? { ...t, text: taskText, priority, dueDate }
          : t
      ));
      setEditId(null);
    } else {
      setTasks([
        {
          id: Date.now(),
          text: taskText,
          priority,
          dueDate,
          completed: false
        },
        ...tasks
      ]);
    }

    setTaskText("");
    setPriority("Medium");
    setDueDate("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const editTask = (task) => {
    setEditId(task.id);
    setTaskText(task.text);
    setPriority(task.priority);
    setDueDate(task.dueDate);
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const filteredTasks = tasks
    .filter(t => {
      if (filter === "Completed") return t.completed;
      if (filter === "Pending") return !t.completed;
      return true;
    })
    .filter(t =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="task-container">
      <h2>✅ Advanced Task Manager</h2>

      {/* Input */}
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button onClick={addOrUpdateTask}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Search */}
      <input
        className="search"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className={`${task.priority.toLowerCase()} ${task.completed ? "done" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />

            <div className="task-info">
              <strong>{task.text}</strong>
              <small>
                Priority: {task.priority} |
                Status: {task.completed ? " Completed" : " Pending"}
                {task.dueDate && ` | Due: ${task.dueDate}`}
              </small>
            </div>

            <div className="actions">
              <button onClick={() => editTask(task)}>✏️</button>
              <button onClick={() => deleteTask(task.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && <p>No tasks found</p>}
    </div>
  );
}
