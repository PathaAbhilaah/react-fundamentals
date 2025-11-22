import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername]=React.useState('')
    const [password, setPassword]=React.useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit=()=>{
        setUser(username)
    }
  return (
    <div>
      <h1>Login page</h1>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username'/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
