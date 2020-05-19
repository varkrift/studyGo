import React from 'react'
import Header from './Components/Header'
import UserList from './Users/UserList'
import FormRegistration from './Users/FormRegistration'
import Context from './context'

function App() {

  let [users, setUsers] = React.useState( [
    {id: 1, name: "Danil", surname: "Schuchkin"},
    {id: 2, name: "Svetlana", surname: "Ivanova"},
    {id: 3, name: "Vadim", surname: "Semkin"},
    {id: 4, name: "Ivan", surname: "Onopko"},
    {id: 5, name: "Boris", surname: "Durnov"},
    {id: 6, name: "Natasha", surname: "Petrova"},
  ])

  // function toogleTodo(id) {
  //   setTodos(todos.map( todo => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo
  //     }
  //   ))
  // }

  function removeUser(id) {
    setUsers(users.filter(user => { return user.id !== id }))
  }

  return (
    <Context.Provider value={{removeUser}}>
      <Header></Header>
      <div className="wrapper">

        <h1 style={{textAlign: "center"}}>StudyGo - learning portal</h1>
        <FormRegistration></FormRegistration>
        {users.length ? <UserList users={users}></UserList> : <p>No Users</p>}

      </div>

    </Context.Provider>
  )
}

export default App;
