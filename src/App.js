import React from 'react'
import TodoList from './Todo/TodoList'
// import TodoItems from './Todo/TodoItems'



function App() {

  const todos = [
    {id: 1, completed: true, title: "Buy car"},
    {id: 2, completed: true, title: "Buy book"},
    {id: 3, completed: true, title: "Buy milk"},
  ]

  return (<div className="wrapper">
    <h1>StudyGo - learning portal</h1>

    <TodoList todos1={todos}></TodoList>
  </div>);
}

export default App;
