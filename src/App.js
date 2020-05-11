import React from 'react'
import TodoList from './Todo/TodoList'
import TodoItems from './Todo/TodoItems'

function App() {
  return (<div className="wrapper">
    <h1>StudyGo - learning portal</h1>

    <TodoList></TodoList>
    <TodoItems></TodoItems>
  </div>);
}

export default App;
