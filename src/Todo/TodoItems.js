import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

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
    
    const {removeTodo} = useContext(Context);
    const classes = [];

    if(todo2.completed) {
        classes.push("done")
    }

    return (
        <li style={styles.li}>

            <span className={classes.join(" ")}>
            <input
            type="checkbox"
            checked={todo2.completed }
            onChange={ () => onChange(todo2.id)}>
            </input>
            {index+1 + "."}
            {todo2.title}
            </span>

            <button style={styles.button} onClick={() => removeTodo(todo2.id)}>&times;</button>
        </li>
    )
}

TodoItems.propTypes = {
    todo2: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TodoItems