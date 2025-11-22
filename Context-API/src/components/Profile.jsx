import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
  return (
    <div>
      <h1>Profile</h1>
      <h3>welcome {user}</h3>
    </div>
  )
}

export default Profile
