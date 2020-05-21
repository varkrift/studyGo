import React from 'react';
import Context from '../../context'
import FormRegistration from './Users/FormRegistration'
import UserList from './Users/UserList'


function Content() {

    let [users, setUsers] = React.useState( [
        {id: 1, name: "Danil", surname: "Schuchkin"},
        {id: 2, name: "Svetlana", surname: "Ivanova"},
        {id: 3, name: "Vadim", surname: "Semkin"},
        {id: 4, name: "Ivan", surname: "Onopko"},
        {id: 5, name: "Boris", surname: "Durnov"},
        {id: 6, name: "Natasha", surname: "Petrova"},
      ])

    function removeUser(id) {
        setUsers(users.filter(user => { return user.id !== id }))
    }
    return (
        <Context.Provider value={{removeUser}}>
            <div>
                <h1 style={{textAlign: "center"}}>StudyGo - learning portal</h1>
                <FormRegistration></FormRegistration>
                {users.length ? <UserList users={users}></UserList> : <p>No Users</p>}
            </div>
        </Context.Provider>
    )
}

export default Content