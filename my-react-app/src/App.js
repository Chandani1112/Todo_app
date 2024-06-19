
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { IconName } from "react-icons/fa";

function App() {
  // Define state for your todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy to Git', completed: false }
  ]);

  // Define functions to handle todo operations
  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app">
      {/* Render TodoForm component to add todos */}
      <TodoForm addTodo={addTodo} />
      {/* Render TodoList component to display todos */}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      {/* Render ItemList component */}
     
    </div>
  );
}

export default App;
