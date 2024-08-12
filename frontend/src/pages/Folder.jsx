import {useContext} from 'react'
import { UserDataContext } from '../context/userDataContext'
import { UserFolderContext } from '../context/userFolderContext'

const Folder = () => {
  const {userData} = useContext(UserDataContext)
  const {userFolder} = useContext(UserFolderContext)

  return (
    <>
      <div>username: {userData.username}</div>
      <div>username: {userFolder.userId}</div>

      
    </>
  )
}

export default Folder