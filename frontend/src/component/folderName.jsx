import {useState, useContext} from 'react'
import { UserDataContext } from '../context/userDataContext'
import { UserFolderContext } from '../context/userFolderContext'
import { useNavigate} from 'react-router-dom'
import axios from "axios"


const FolderName = ({divFolderNameDisplay, setDivFolderNameDisplay}) => {
  const {userData} = useContext(UserDataContext)
  const {setUserFolder} = useContext(UserFolderContext)
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  function submit(){
    axios
    .post("http://localhost:5000/api/folder/add-folder", {userId: userData._id, folder: {name: input, reviewers: []}})
    .then((response) => {
      setUserFolder(response)
      navigate("/folder/" + response.data.folders.at(-1)._id)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div style={{display: divFolderNameDisplay, height: "60vh", width: "70vw", position: "absolute", background: "lightblue"}} onClick={(e) => e.stopPropagation()}>
      <h1>Name your reviewer</h1>
      <input type='text' style={{display: "block"}} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setDivFolderNameDisplay("none")}>Cancel</button>
      <button onClick={submit}>Submit</button>
      <h6>This will help you to organize your reviewers later on</h6>
    </div>
  )
}

export default FolderName