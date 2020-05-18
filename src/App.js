import React from 'react'
import TodoList from './Todo/TodoList'
import FormRegistration from './Todo/FormRegistration'
import Context from './context'

function App() {

  let [todos, setTodos] = React.useState( [
    {id: 1, completed: false, title: "Buy car"},
    {id: 2, completed: false, title: "Buy book"},
    {id: 3, completed: false, title: "Buy milk"},
    {id: 4, completed: false, title: "Buy home"},
    {id: 5, completed: false, title: "Buy home"},
    {id: 6, completed: false, title: "Buy home"},
  ])

  function toogleTodo(id) {
    setTodos(todos.map( todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
      }
    ))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => { return todo.id !== id }))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1 style={{textAlign: "center"}}>StudyGo - learning portal</h1>
        <FormRegistration></FormRegistration>
        {todos.length ? <TodoList todos1={todos} onToggle={toogleTodo}></TodoList> : <p>No Todos</p>}
      </div>
    </Context.Provider>
  )
}

export default App;
