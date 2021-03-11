import React from 'react';
import FolderItem from "./FolderItem";
import AddItem from "../GeneralComponent/AddItem";
import EditObject from "../GeneralComponent/EditObject";

const FolderComponent = (props) => {
  const {
    folders,
    setFolders,
    handleOnSubmit,
    textInput,
    handleOnChange,
    deleteFolder,
    hidden,
    setHidden,
    handleOnChangeEdit,
    textEditInput,
    editFolder,
    handleOnClickEdit,
    itemSelected
  } = props;

  return (
    <div className="container w-50 card d-flex justify-content-center text-center">
      {hidden ?
      <>
      <h1>Folders</h1>
      {
        folders.map((oneItem, index) => (
            <div
              className="pt-5 justify-content-center"
              key={index}
            >
              <FolderItem
                item={oneItem}
                indexFolder={index}
                setFolders={setFolders}
                deleteFolder={deleteFolder}
                handleOnClickEdit={handleOnClickEdit}
              />
            </div>
        ))}
      <div className="pt-5 d-flex justify-content-center">
        <AddItem
          placeholder="New Folder"
          className="justify-content-center"
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          textInput={textInput}
        />
      </div>
      </>
      :
      <EditObject
        setHidden={setHidden}
        title={`Folder "${itemSelected.name}"`}
        handleOnChange={handleOnChangeEdit}
        textInput={textEditInput}
        handleOnSubmit={editFolder}
      />}
    </div>
  );
}

export default FolderComponent;
