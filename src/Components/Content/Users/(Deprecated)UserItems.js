import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../../../context'
import Iam2 from '../../../img/Iam2.png'
import deleteIcon from '../../../img/deleteIcon.svg'

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
        border: 'none',
        borderRadius: '40px',
        padding: '1px',
        backgroundColor:'white',
    },

    divUserImg: {
        position: 'relative',
        overflow: 'hidden',
        width: '6.5em',
        height: '6.5em',
        marginTop: '1.5em',
        border: '1.5px solid #EEEEEE',
        borderRadius: '40px',
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
        outline: 'none',
    },
}

function UserItems(props) {
    
    const {removeUser} = useContext(Context);

    return (
        <div id="userCard" style={styles.userCard}>

            <div style={styles.divUserImg}><img src={Iam2} alt="logo" style={styles.userImg} /></div>
            <div>{props.user.name + " " + props.user.surname}</div>

            <div><button style={styles.buttonDelete} onClick={() => removeUser(props.user.id)}><img src={deleteIcon} alt="delete"  /></button></div>
        </div>
    )
}

UserItems.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default UserItems