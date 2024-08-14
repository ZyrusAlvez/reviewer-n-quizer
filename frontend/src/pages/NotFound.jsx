import React from 'react'
import { UserDataContext } from '../context/userDataContext'
import { useContext } from 'react'

const NotFound = () => {
  const {userData} = useContext(UserDataContext)
  console.log(userData)
  return (
    <div>NotFound</div>
  )
}

export default NotFound