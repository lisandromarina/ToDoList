import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FolderComponent from "./FolderComponent";

const FolderContainer = () => {
  const [textInput, setTextInput] = useState("");
  const [folders, setFolders] = useState([]);

  const handleOnDelete = (index) => {
    /* const newFolder = [...folders]
    setFolders([...folders, { name: itemName }])
    deleteFolder() */
  }

  const handleOnSubmit = (itemName) => {
    setFolders([...folders, { name: itemName }])
    saveNewFolder({ name: itemName })
  }

  const handleOnChange = (text) => {
    setTextInput(text)
  }

  const getAllFolders = async() =>{
    await axios.get(`http://localhost:8080/folder/getAllFolders`)
    .then(res => {
      setFolders(res.data)
    })
  }

  const deleteFolder = async(id) =>{
    await axios.delete(`http://localhost:8080/folder/deleteFolder/${id}`)
  }

  const saveNewFolder = async(folder) =>{
    await axios.post(`http://localhost:8080/folder/save`, folder)
  }

  useEffect(() => {
    const fn = async() => await getAllFolders();
    fn()     
  }, []);

  return (
    <FolderComponent
      folders={folders}
      setFolders={setFolders}
      handleOnSubmit={handleOnSubmit}
      textInput={textInput}
      handleOnChange={handleOnChange}
      deleteFolder={deleteFolder}
    />
  );
}

export default FolderContainer;
