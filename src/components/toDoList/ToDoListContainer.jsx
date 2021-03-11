import React, { useState } from 'react';
import ToDoListComponent from "./ToDoListComponent";

const ToDoListContainer = () => {
  const [textInput, setTextInput] = useState("");
  const [task, setTask] = useState([{
    id: 1,
    name: "work",
    checked: false
  },
  {
    id: 2,
    name: "pesca",
    checked: false
  }
  ])

  const handleOnChange = (text) => {
    setTextInput(text)
  }
  const handleOnSubmit = (taskName) => {
    setTask([...task, { name: taskName, checked: false }])
  }

  const handleOnClickCheck = (index) => {
    const newTasks= [...task];
    newTasks[index].checked = !newTasks[index].checked; 
    setTask(newTasks);
  };

  return (
    <ToDoListComponent
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      handleOnClickCheck={handleOnClickCheck}
      textInput={textInput}
      task={task}

    />
  );
}

export default ToDoListContainer;
