// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// function App() {
//   // Load tasks from localStorage or initialize an empty array
//   const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   const [tasks, setTasks] = useState(initialTasks);
//   const [taskInput, setTaskInput] = useState('');

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (taskInput.trim() !== '') {
//       const newTask = { text: taskInput, completed: false };
//       setTasks([...tasks, newTask]);
//       setTaskInput('');
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const toggleCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const editTask = (index) => {
//     const newText = prompt('Edit task:', tasks[index].text);
//     if (newText !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[index].text = newText;
//       setTasks(updatedTasks);
//     }
//   };

//   return (
//     <div className="App">
//       {/* <div className="heading">To Do List</div> */}
//       <input
//         type="text"
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}
//         placeholder="Enter task"
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} className={task.completed ? 'completed' : ''}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleCompletion(index)}
//             />
//             <div className="task-text">{task.text}</div>
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => editTask(index)} />
//               <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => deleteTask(index)} />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// function App() {

//   const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//    const [tasks, setTasks] = useState(initialTasks);
//   const [taskInput, setTaskInput] = useState('');

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (taskInput.trim() !== '') {
//       setTasks([...tasks, { text: taskInput, completed: false }]);
//       setTaskInput('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       addTask();
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const toggleCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const editTask = (index) => {
//     const newText = prompt('Edit task:', tasks[index].text);
//     if (newText !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[index].text = newText;
//       setTasks(updatedTasks);
//     }
//   };

//   return (
//     <div className="App">
//       {/* <div className="heading">To Do List</div> */}
//       <input
//       className='field'
//         type="text"
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}
//         onKeyDown={handleKeyPress} // Call handleKeyPress function when a key is pressed
//         placeholder="Press Enter to add task"
//       />
//       {/* <button onClick={addTask}>Add Task</button> */}
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} className={task.completed ? 'completed' : ''}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleCompletion(index)}
//             />
//             <div className="task-text">{task.text}</div>
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => editTask(index)} />
//               <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => deleteTask(index)} />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// function App() {

//   const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   const [tasks, setTasks] = useState(initialTasks);
//   const [taskInput, setTaskInput] = useState('');

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (taskInput.trim() !== '') {
//       setTasks([...tasks, { text: taskInput, completed: false }]);
//       setTaskInput('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       addTask();
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   const toggleCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const editTask = (index) => {
//     const newText = prompt('Edit task:', tasks[index].text);
//     if (newText !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[index].text = newText;
//       setTasks(updatedTasks);
//     }
//   };

//   return (
//     <div className="App">
//       <input
//         className='field'
//         type="text"
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}
//         onKeyDown={handleKeyPress} // Call handleKeyPress function when a key is pressed
//         placeholder="+ Add ToDo"
//       />
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} className={task.completed ? 'completed' : ''}>
//             <div className="checkbox" onClick={() => toggleCompletion(index)}>
//               {task.completed && <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />}
//             </div>
//             <div className="task-text">{task.text}</div>
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => editTask(index)} />
//               <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => deleteTask(index)} />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  const getCurrentDate = () => {
    const dateObj = new Date();
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const date = dateObj.getDate();
    return `${date} ${month}`;
  };

  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [taskInput, setTaskInput] = useState('');
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const newText = prompt('Edit task:', tasks[index].text);
    if (newText !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newText;
      setTasks(updatedTasks);
    }
  };

  return (
    
    <div className="App">
      <input
        className='field'
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="+ Add ToDo"
        
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div className="date">{currentDate}</div>
            <div className="checkbox" onClick={() => toggleCompletion(index)}>
              {task.completed && <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />}
            </div>
            <div className="task-text">{task.text}</div>
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faEdit}
                className="edit-icon"
                onClick={() => editTask(index)}
                title="Edit"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="delete-icon"
                onClick={() => deleteTask(index)}
                title="Delete"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
