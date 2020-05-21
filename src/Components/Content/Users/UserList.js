import React from 'react'
import UserItems from './UserItems'
import PropTypes from 'prop-types'

const styles = {
    users: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 0,
        padding: '50px',
        borderRadius: '20px',
        // backgroundColor: "#E1F5FE",
    },
}

function UserList(props) {
    return (
        <div style={styles.users}>
            {props.users.map( (user, index) => {
                return <UserItems user={user} key={index} index={index}></UserItems>
                })
            }
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserList