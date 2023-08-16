import React from 'react'
import './ProfileScreen.css'
import user_avatar from './user avatar icon.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Nav from './Nav'
import { auth } from './firebase'

const ProfileScreen = () => {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen__body'>
        <h1>Edit profile</h1>
        <div className='profileScreen__info'>
            <img src = {user_avatar} alt = "user avatar"/>
            <div className='profileScreen__details'>
                <h2>{user.email}</h2>
                <div className='profileScreen__plans'>
                  <h3>Plans</h3>
                    <button onClick = {() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
