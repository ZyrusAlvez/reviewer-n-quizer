import React from 'react'
import FolderName from '../component/FolderName.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
  const [divFolderNameDisplay, setDivFolderNameDisplay] = useState("none")
  const [style, setStyle] = useState({});
  const navigate = useNavigate()

  function handleSubmitClick(e){
    e.stopPropagation()
    setDivFolderNameDisplay("block")
    setStyle({ background: "rgba(0, 0, 0, 0.5)" }); // Mock glass effect
  }
  
  function handleBackClick(e){
    e.stopPropagation()
    navigate(-1)
  }

  function handleDivClick(){
    setDivFolderNameDisplay("none")
    setStyle({background: "white"})
  }

  return (
    <div style={{
      ...style,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
    onClick={handleDivClick}>
      <textarea rows="20" cols="150" style={{...style, resize: "none", display: "block"}}></textarea>
      <div>
        <button onClick={handleBackClick}>back</button>
        <button onClick={handleSubmitClick}>Submit</button>
      </div>
      <FolderName divFolderNameDisplay={divFolderNameDisplay} setDivFolderNameDisplay={setDivFolderNameDisplay}/>
    </div>
  )
}

export default Notes