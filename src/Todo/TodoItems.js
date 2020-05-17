import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import Iam2 from '../Iam2.png'


const styles = {
    userCard: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '20px',
        width: '250px',
        height: '400px',
        borderRadius: '40px',
        padding: '1px',
        backgroundColor:'rgb(223, 223, 223)',
    },
    button: {
        marginLeft: '10px',
        padding: '5px',
        width: '50px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: 'brown',
    },
    img: {
        width: "10em",
        borderRadius: '40px',
    }
}

function TodoItems({todo2, index, onChange}) {
    
    const {removeTodo} = useContext(Context);
    const classes = [];

    if(todo2.completed) {
        classes.push("done")
    }

    return (
        <div id="userCard" style={styles.userCard}>

            {/* <span className={classes.join(" ")}>
            <input
            type="checkbox"
            checked={todo2.completed }
            onChange={ () => onChange(todo2.id)}>
            </input>
            {index+1 + "."}
            {todo2.title}
            </span> */}
            <div><img src={Iam2} alt="logo" style={styles.img} /></div>
            <div>{todo2.title}</div>

            <div><button style={styles.button} onClick={() => removeTodo(todo2.id)}>&times;</button></div>
        </div>
    )
}

TodoItems.propTypes = {
    todo2: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TodoItems