import React from 'react'
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

const styles = {
    div: {
        margin: 0,
        padding: '1px',
        borderRadius: '20px',
        backgroundColor: "grey",
    },
    ul: {
        listStyle: 'none',
    },
}

function TodoList(props) {
    return (
        <div style={styles.div}>
            <ul style={styles.ul}>

            {props.todos1.map( (todo, index) => {
                return <TodoItems todo2={todo} key={index} index={index}></TodoItems>
                })
            }

            </ul>
        </div>
    )

}

TodoList.propTypes = {
    todos1: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList