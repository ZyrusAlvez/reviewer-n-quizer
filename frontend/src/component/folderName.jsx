import {useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'


const FolderName = ({divFolderNameDisplay, setDivFolderNameDisplay}) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  return (
    <div style={{display: divFolderNameDisplay, height: "60vh", width: "70vw", position: "absolute", background: "lightblue"}} onClick={(e) => e.stopPropagation()}>
      <h1>Name your reviewer</h1>
      <input type='text' style={{display: "block"}} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setDivFolderNameDisplay("none")}>Cancel</button>
      <button onClick={() => navigate("/folder/:id")}>Submit</button>
      <h6>This will help you to organize your reviewers later on</h6>
    </div>
  )
}

export default FolderName