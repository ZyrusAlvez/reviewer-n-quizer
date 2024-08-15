import React, { useState } from 'react'

const QuestionCard = ({question, answer}) => {
  const [show, setShow] = useState("*****")

  const [buttonText, setButtonText] = useState("show")
  const [editMode, setEditMode] = useState(false)

  function handleShow(){
    if(show === "*****"){
      setShow(answer)
      setButtonText("hide")
    }else{
      setShow("*****")
      setButtonText("show")
    }
  }

  return ( !editMode ? 
    <div style={{background: "#FAF9F6", boxShadow: "5px 5px 5x black", marginBottom: "10px"}}>
      <div style={{display: "flex"}}>
        <h3>Question:</h3>
        <h3>{question}</h3>
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button>Delete</button>
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
        <input value={question}/>
      </div>
      <div style={{display: "flex"}}>
        <h3>Answer:</h3>
        <input type="radio" id="html" name="true or false" value="true" />
        <label for="html">true</label>
        <input type="radio" id="css" name="true or false" value="false" />
        <label for="css">false</label>
      </div>
    </div>
  )
}

export default QuestionCard