import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Samuel Moore',
      image: 'https://img.icons8.com/?size=512&id=108832&format=png',
      placeCount: 3
    }
  ]

  return (
    <UsersList users={USERS}/>
  )
}

export default Users