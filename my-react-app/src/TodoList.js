
import React from 'react';
import Todo from './Todo';
import { MdDeleteForever } from 'react-icons/md';
 import { FaEdit } from "react-icons/fa";
const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo} // Pass editTodo function to Todo component
        />
        
      ))}
   <FaEdit />
          <MdDeleteForever onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

 export default TodoList;
// import React from 'react';
// import { MdDeleteForever } from 'react-icons/md';
// import { FaEdit } from "react-icons/fa";
// const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
//   return (
//     <div className="todo-list">
//       {todos.map((todo) => (
//         <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
//           <input
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => toggleTodo(todo.id)}
//           />
//           <span>{todo.text}</span>
//           {/* Delete icon */}
//           <FaEdit />
//           <MdDeleteForever onClick={() => deleteTodo(todo.id)} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;
