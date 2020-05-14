import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        alignItems: 'center',
    },
    button: {
        marginLeft: '10px',
        padding: '5px',
        width: '50px',
        border: 'none',
        borderRadius: '8px'
    },
}

function TodoItems({todo2, index, onChange}) {
    return (
        <li style={styles.li}>

            <span>
            <input type="checkbox" onChange={ () => onChange(todo2.id)}></input>
            {index+1 + "."}
            {todo2.title}
            </span>

            <button style={styles.button}>&times;</button>
        </li>
    )
}

TodoItems.propTypes = {
    todo2: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TodoItems