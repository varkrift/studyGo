import React from 'react'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

export default function TodoList() {
    return (
        <ul style={styles.ul}>
            <li>1</li>
            <li>2</li>
        </ul>
    )

}