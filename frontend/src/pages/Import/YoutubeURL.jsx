import {useState} from 'react'
import FolderNaming from "../../component/top_level/FolderNaming";
import axios from 'axios'

const YoutubeURL = () => {
  const [url, setUrl] = useState("")
  const [material, setMaterial] = useState("")
  const [divFolderNamingDisplay, setDivFolderNamingDisplay] = useState("none");

  function handleSubmit(){
    setDivFolderNamingDisplay("block")

    axios
    .post("http://localhost:5000/api/yturl/", {url: url})
    .then((response) => {
      setMaterial(response.data)
    })
    .catch((error) => {
      alert(error)
    })
  }

  return (
    <div>
      <input onChange={e => setUrl(e.target.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
      <FolderNaming
        divFolderNamingDisplay={divFolderNamingDisplay}
        setDivFolderNamingDisplay={setDivFolderNamingDisplay}
        material={material}
      />
    </div>
  )
}

export default YoutubeURL