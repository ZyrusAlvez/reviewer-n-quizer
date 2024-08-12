import React from 'react'
import { useNavigate } from 'react-router-dom'

const chooseImport = ({divImportDisplay}) => {
  const navigate = useNavigate()

  return (
    <div style={{display: divImportDisplay, height: "60vh", width: "70vw", position: "absolute", background: "lightblue"}}>
      <button onClick={() => navigate("/notes")}>Notes</button>
      <button>Youtube URL</button>
      <button>PDF</button>
    </div>
  )
}

export default chooseImport