import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import Iam2 from '../Iam2.png'
import deleteIcon from '../deleteIcon.svg'

const styles = {
    userCard: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '20px',
        width: '250px',
        height: '400px',
        borderRadius: '40px',
        padding: '1px',
        backgroundColor:'#E0E0E0',
    },

    divUserImg: {
        position: 'relative',
        overflow: 'hidden',
        width: '6.5em',
        height: '6.5em',
        marginTop: '1.5em'
      },

    userImg: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '6.5em',
        height: '6.5em',
        objectFit: 'cover',
        borderRadius: '40px',
      },

    buttonDelete: {
        margin: '10px',
        padding: '2px',
        width: '50px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#FF8A65',
    },
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
            <div style={styles.divUserImg}><img src={Iam2} alt="logo" style={styles.userImg} /></div>
            <div>{todo2.title}</div>

            <div><button style={styles.buttonDelete} onClick={() => removeTodo(todo2.id)}><img src={deleteIcon} alt="delete"  /></button></div>
        </div>
    )
}

TodoItems.propTypes = {
    todo2: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TodoItems