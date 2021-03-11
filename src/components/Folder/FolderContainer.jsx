import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FolderComponent from "./FolderComponent";

const FolderContainer = () => {
  const [textInput, setTextInput] = useState("");
  const [folders, setFolders] = useState([]);
  const [response, setResponse] = useState("");
  const [hidden, setHidden] = useState(true);
  const [textEditInput, setTextEditInput] = useState("");
  const [openEditId, setOpenEdit] = useState();
  const [itemSelected, setItemSelected] = useState({});

  const handleOnChangeEdit = (text) => {
    setTextEditInput(text)
  }

  const handleOnClickEdit = (item) => {
    setOpenEdit(item.id)
    setHidden(!hidden)
    setItemSelected(item)
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
    setResponse("deleted")
  }

  const saveNewFolder = async(folder) =>{
    await axios.post(`http://localhost:8080/folder/save`, folder)
  }

  const editFolder = async(text) =>{
    await axios.post(`http://localhost:8080/folder/edit/${openEditId}`, {name: text})
  }

  useEffect(() => {
    const fn = async() => await getAllFolders();
    fn()     
  }, [response]);


  return (
    <FolderComponent
      folders={folders}
      setFolders={setFolders}
      handleOnSubmit={handleOnSubmit}
      textInput={textInput}
      handleOnChange={handleOnChange}
      deleteFolder={deleteFolder}
      setHidden={setHidden}
      hidden={hidden}
      handleOnChangeEdit={handleOnChangeEdit}
      textEditInput={textEditInput}
      editFolder={editFolder}
      setOpenEdit={setOpenEdit}
      handleOnClickEdit={handleOnClickEdit}
      itemSelected={itemSelected}
    />
  );
}

export default FolderContainer;
