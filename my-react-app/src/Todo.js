
import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/fa";

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditedText(todo.text);
    }
  };

  const handleSave = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleChange}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
        </>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
    
  );
};

export default Todo;
