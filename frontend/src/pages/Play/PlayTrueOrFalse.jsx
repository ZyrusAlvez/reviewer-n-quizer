import React, { useContext, useState, useEffect } from 'react'
import { UserFolderContext } from '../../context/userFolderContext';
import { findReviewerJson } from '../../utils/findReviewer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../../component/Loading';
import correctSound from '../../../assets/sounds/correct.mp3'
import wrongSound from '../../../assets/sounds/wrong.mp3'

const PlayTrueOrFalse = () => {
  const {userFolder} = useContext(UserFolderContext)
  const [data, setData] = useState(null)
  const {folderId} = useParams()
  const [index, setIndex] = useState(0)
  const [showWhy, setShowWhy] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [nextText, setNextText] = useState("Next")

  useEffect(() => {
    if (userFolder.userId) {
      axios
        .post("http://localhost:5000/api/folder/getFolder", {
          userId: userFolder.userId,
        })
        .then((response) => {
          // this will use the recent saved true or false questions
          setData(findReviewerJson(response.data, folderId, "trueOrFalse"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userFolder]);

  function handleButton(users_answer){
    setDisabled(true) 
    const correctAudio = new Audio(correctSound);
    const wrongAudio = new Audio(wrongSound);

    const correctAnswer = data[index].answer.toString()

    if(correctAnswer == "false"){
      setShowWhy(true)
    }
    if (users_answer === correctAnswer){
      correctAudio.play();
    }else{
      wrongAudio.play();
    }

    setShowNext(true)
  }

  function next(){
    if (index === data.length - 2){ // edits the text of the last button
      setNextText("Done")
    }

    // reset
    setDisabled(false) 
    setShowWhy(false)
    setShowNext(false)

    // move towards the next index
    setIndex((i) => i+1)
  }

  return (
    <div>
      {data ? 
      (
      <div>
          <h1>True or False</h1>
          <div style={{display: "flex"}}>
            {data.map((e, i) => <h3 key={i} style={{display: i == index ? "block" : "none"}}>{e.question}</h3>)}
          </div>

          {/* when done answer and the correct answer is false*/}
          {showWhy && (
            <div>
              why: {data[index].why}
            </div>
          )}

          <div>
            <button onClick={() => handleButton("true")} disabled={disabled}>true</button>
            <button onClick={() => handleButton("false")} disabled={disabled}>false</button>
          </div>

          {/* when done answer */}
          {
            showNext && (
              <button onClick={next}>{nextText}</button>
            )
          }
 
      </div>
      ) : (
        <Loading />
      )
      }
    </div>

  )
}

export default PlayTrueOrFalse