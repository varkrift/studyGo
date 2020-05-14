import React from 'react'
import TodoItems from './TodoItems'

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

export default function TodoList() {
    return (
        <div style={styles.div}>
            <ul>
                <TodoItems></TodoItems>
                <TodoItems></TodoItems>
                <TodoItems></TodoItems>
            </ul>
        </div>
    )

}