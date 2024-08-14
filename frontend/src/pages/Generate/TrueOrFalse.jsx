import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserFolderContext } from '../../context/userFolderContext'
import { useParams } from 'react-router-dom'
import Loading from '../../component/Loading.jsx'

const TrueOrFalse = () => {
  const { id } = useParams()
  const { userFolder } = useContext(UserFolderContext)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (Object.keys(userFolder).length){
      const folder = userFolder.folders.find((e) => e._id === id)
      axios
      .post("http://localhost:5000/api/reviewer/true-or-false", {prompt: folder.material})
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }, [userFolder])


  return (
    !data ? <Loading /> : 
    <div>
      <ol>
        {data.map((e, i) => {
          return <li key={i}>
            {e.question} - {e.answer.toString()}
            </li>})}
      </ol>
    </div>
  )
}

export default TrueOrFalse
