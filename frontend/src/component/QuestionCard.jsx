import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserFolderContext } from '../context/userFolderContext'
import { findIndexUsingId, findIndexUsingClassification } from '../utils/findIndex'

const QuestionCard = ({id, index, question, answer}) => {
  const [localQuestion, setLocalQuestion] = useState(question);
  const [localAnswer, setLocalAnswer] = useState(answer);

  const [show, setShow] = useState("*****")

  const [buttonText, setButtonText] = useState("show")
  const [editMode, setEditMode] = useState(false)

  const [editAnswer, setEditAnswer] = useState("")
  const [editQuestion, setEditQuestion] = useState(question)

  const {userFolder, setUserFolder} = useContext(UserFolderContext)

  useEffect(() => {
    setLocalQuestion(question)
    setLocalAnswer(answer)
  }, [question])

  function handleShow(){
    if(show === "*****"){
      setShow(localAnswer)
      setButtonText("hide")
    }else{
      setShow("*****")
      setButtonText("show")
    }
  }

  function handleDelete(){
    const reviewerId = userFolder.folders[findIndexUsingId(id, userFolder.folders)].reviewers[findIndexUsingClassification("trueOrFalse", userFolder.folders[findIndexUsingId(id, userFolder.folders)].reviewers)]._id
    const questionToRemove = userFolder.folders[findIndexUsingId(id, userFolder.folders)].reviewers[findIndexUsingClassification("trueOrFalse", userFolder.folders[findIndexUsingId(id, userFolder.folders)].reviewers)].json[index].question
    axios
    .post('http://localhost:5000/api/folder/remove-question', {folderId: id, reviewerId, questionToRemove})
    .then((response) => {
      console.log(response.data)
      setUserFolder(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function doneEdit(){
    setEditMode(false)
    setLocalAnswer(editAnswer)
    setLocalQuestion(editQuestion)

    if (show !== "*****"){
      handleShow()
    }

    // just need to save this to the database
    const reviewerId = userFolder.folders[findIndexUsingId(id, userFolder.folders)].reviewers[findIndexUsingClassification("trueOrFalse", userFolder.folders[findIndexUsingId(id, userFolder.folders)].reviewers)]._id

    axios
    .post('http://localhost:5000/api/folder/edit-json', {folderId: id, reviewerId: reviewerId, questionIndex: index, newQuestion: editQuestion, newAnswer: editAnswer})
    .then((response) => {
      setUserFolder(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return ( !editMode ? 
    <div style={{background: "#FAF9F6", boxShadow: "5px 5px 5x black", marginBottom: "10px"}}>
      <div style={{display: "flex"}}>
        <h3>Question:</h3>
        <h3>{localQuestion}</h3>
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div style={{display: "flex"}}>
        <h3>Answer:</h3>
        <h3>{show}</h3>
        <button onClick={handleShow}>{buttonText}</button>
      </div>
    </div>
    :
    <div style={{background: "#FAF9F6", boxShadow: "5px 5px 5x black", marginBottom: "10px"}}>
      <div style={{display: "flex"}}>
        <h3>Question:</h3>
        <input value={editQuestion} onChange={(e) => setEditQuestion(e.target.value)}/>
        <button onClick={doneEdit}>done</button>
      </div>
      <div style={{display: "flex"}}>
        <h3>Answer:</h3>
        <input type="radio" id="true" name="true or false" value="true" onClick={() => setEditAnswer("true")}/>
        <label htmlFor="true">true</label>
        <input type="radio" id="false" name="true or false" value="false" onClick={() => setEditAnswer("false")}/>  
        <label htmlFor="false">false</label>
      </div>
    </div>
  )
}

export default QuestionCard