import React from 'react'
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'
import FormRegistration from './FormRegistration'


const styles = {
    users: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 0,
        padding: '50px',
        borderRadius: '20px',
        backgroundColor: "#E1F5FE",
    },
}

function TodoList(props) {
    return (
        <div style={styles.users}>
            <FormRegistration></FormRegistration>
            {props.todos1.map( (todo, index) => {
                return <TodoItems todo2={todo} key={index} index={index} onChange={props.onToggle}></TodoItems>
                })
            }
        </div>
    )

}

TodoList.propTypes = {
    todos1: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TodoList