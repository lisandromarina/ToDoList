import React from 'react';
import { Link } from "react-router-dom";
import AddItem from "../GeneralComponent/AddItem";
import ToDoItem from "./ToDoItem";
import EditObject from "../GeneralComponent/EditObject";

const ToDoListComponent = (props) => {
  const {
    handleOnSubmit,
    textInput,
    handleOnChange,
    task,
    handleOnClickCheck,
    item,
    hidden,
    setHidden,
    handleOnChangeEdit,
    textEditInput,
    editTask,
    deleteTask,
    handleOnClickEdit,
    itemSelected
  } = props;

  const title = "Folder > " + item.name;
  return (
    <div className="container w-50 card d-flex justify-content-center text-center">
      { hidden ?
        <>
          <Link
            to="/"
            className="text-color-black"
          >
            {title}
          </Link>
          {
            task?.map((oneItem, index) => (
              <div key={index}>
                <ToDoItem
                  item={oneItem}
                  indexItem={index}
                  handleOnClickCheck={handleOnClickCheck}
                  editTask={editTask}
                  handleOnClickEdit={handleOnClickEdit}
                  deleteTask={deleteTask}
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
        </>
        :
        <EditObject
          setHidden={setHidden}
          title={`Task to edit "${itemSelected.name}"`}
          handleOnChange={handleOnChangeEdit}
          textInput={textEditInput}
          handleOnSubmit={editTask}
        />
      }
    </div>
  );
}

export default ToDoListComponent;
