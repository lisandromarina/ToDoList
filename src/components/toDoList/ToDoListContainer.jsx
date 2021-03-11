import React, { useState, useEffect } from 'react';
import ToDoListComponent from "./ToDoListComponent";
import axios from 'axios';

const ToDoListContainer = (props) => {
  const [textInput, setTextInput] = useState("");
  const [task, setTask] = useState([])
  const [hidden, setHidden] = useState(true);
  const [textEditInput, setTextEditInput] = useState("");
  const [openEditId, setOpenEdit] = useState();
  const [itemSelected, setItemSelected] = useState({});
  const [response, setResponse] = useState("");

  const { item } = props.location.state

  const handleOnChange = (text) => {
    setTextInput(text)
  }

  const handleOnChangeEdit = (text) => {
    setTextEditInput(text)
  }

  const handleOnClickEdit = (item) => {
    setOpenEdit(item.id)
    setHidden(!hidden)
    setItemSelected(item)
  }

  const saveNewTask = async (task) => {
    await axios.post(`http://localhost:8080/task/saveTask/`, task)
  }

  const handleOnSubmit = async (taskName) => {
    const newTask = { name: taskName }
    setTask([...task, { name: taskName, checked: false }])
    await saveNewTask(newTask)
  }


  const handleOnClickCheck = (index) => {
    const newTasks = [...task];
    newTasks[index].checked = !newTasks[index].checked;
    setTask(newTasks);
    updateCheck(newTasks[index].id, newTasks[index].checked)
  };

  const updateCheck = async (id, value) => {
    if( value === true) value = 1;
    else value = 0;
    await axios.put(`http://localhost:8080/task/updateCheckTask/${id}/${value}`)
  }

  const getAllTaskByFolder = async () => {
    await axios.get(`http://localhost:8080/task/getTaskByFolder/${item.id}`)
  }

  const editTask = async(text) =>{
    await axios.put(`http://localhost:8080/task/edit/${openEditId}`, {name: text})
   console.log(openEditId)
  }

  const deleteTask = async(id) =>{
    await axios.delete(`http://localhost:8080/task/deleteOneTask/${id}`)
    setResponse("deleted")
  }

  useEffect(() => {
    setTask(item.tasks)
  }, []);

  useEffect(() => {
    const fn = async() => await getAllTaskByFolder();
    fn()     
  }, [response]);

  return (
    <ToDoListComponent
      handleOnSubmit={handleOnSubmit}
      handleOnChange={handleOnChange}
      handleOnClickCheck={handleOnClickCheck}
      deleteTask={deleteTask}
      textInput={textInput}
      task={task}
      item={item}
      setHidden={setHidden}
      hidden={hidden}
      handleOnChangeEdit={handleOnChangeEdit}
      textEditInput={textEditInput}
      editTask={editTask}
      setOpenEdit={setOpenEdit}
      handleOnClickEdit={handleOnClickEdit}
      itemSelected={itemSelected}
      deleteTask={deleteTask}
    />
  );
}

export default ToDoListContainer;
