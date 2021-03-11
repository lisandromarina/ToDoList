import React from 'react';
import { Link } from "react-router-dom";
import AddItem from "./AddItem";
import ToDoItem from "./ToDoItem";

const ToDoListComponent = (props) => {
  const {
    handleOnSubmit,
    textInput,
    handleOnChange,
    task,
    handleOnClickCheck
  } = props;

  return (
    <div className="container">
      Folder
      <Link
        to="/"
        className="text-color-black"
      >
        Folder to do list
    </Link>
      {
        task.map((oneItem, index) => (
          <div key={index}>
            <ToDoItem
              item={oneItem}
              indexItem={index}
              handleOnClickCheck={handleOnClickCheck}
            />
          </div>
        ))}
      <AddItem
        placeholder="New Task"
        className="justify-content-center"
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        textInput={textInput}
      />
    </div>
  );
}

export default ToDoListComponent;
