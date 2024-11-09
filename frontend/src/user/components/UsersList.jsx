import React from 'react'
import './UsersList.css'
import UserItem from './UserItem'

const UsersList = ({ users }) => {
    if (users.length === 0) {
        return (
            <div className='center'>
                <h2>No users found.</h2>
            </div>
        )
    }
    return (
        <ul className='users-list'>
            {users.map((user) => {
                return <UserItem 
                    key={user.id} 
                    user={user}
                />
            })}
        </ul>
    )
}

export default UsersList