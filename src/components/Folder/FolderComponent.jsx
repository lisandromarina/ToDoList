import React from 'react';
import FolderItem from "./FolderItem";
import AddItem from "../toDoList/AddItem";

const FolderComponent = (props) => {
  const {
    folders,
    setFolders,
    handleOnSubmit,
    textInput, 
    handleOnChange,
    deleteFolder
  } = props;

  return (
    <div className="container">
      Folders
      {
        folders?.map((oneItem, index) => (
          <div
            className="pt-5"
            key={index}
          >
            <FolderItem
              item={oneItem}
              indexFolder={index}
              setFolders={setFolders}
              deleteFolder={deleteFolder}
            />
          </div>
        ))}
      <AddItem
        placeholder="New Folder"
        className="justify-content-center"
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        textInput={textInput}
      />
    </div>
  );
}

export default FolderComponent;
