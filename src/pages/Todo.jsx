import { useState } from "react";
import "./Todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Add todo
  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-page">
      <h2>📝 Todo List</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <p>No tasks added yet</p>}

        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
