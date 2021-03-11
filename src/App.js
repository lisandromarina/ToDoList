import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import FolderList from './components/Folder';
import ToDoList from './components/toDoList'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FolderList} />
        <Route exact path="/itemslist" component={ToDoList} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
