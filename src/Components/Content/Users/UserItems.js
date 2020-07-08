import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    userCard: {
        display: 'flex',
        // justifyContent: 'space-between',
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

    // buttonDelete: {
    //     margin: '10px',
    //     padding: '2px',
    //     width: '50px',
    //     border: 'none',
    //     borderRadius: '8px',
    //     backgroundColor: '#FF8A65',
    //     outline: 'none',
    // },
}

function UserItems(props) {
    
    // const {removeUser} = useContext(Context);

    return (
        <div id="userCard" style={styles.userCard}>

            <div style={styles.divUserImg}><img src={props.img} alt="logo" style={styles.userImg} /></div>
            <div style={{paddingTop: "10px", textAlign: "center", fontWeight: 'bold'}}>{props.name}</div>
            <div style={{fontSize:"0.75em", padding: "5px 10px 0px 10px", textAlign: "center"}}>{props.biography}</div>

            {/* <div><button style={styles.buttonDelete} onClick={() => removeUser(props.user.id)}><img src={deleteIcon} alt="delete"  /></button></div> */}
        </div>
    )
}

UserItems.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
}

export default UserItems