import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

function Profile() {
  const {user} = useContext(AuthContext);
  return (
    <div className='p-4 pb-24'>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  )
}

export default Profile