import {useState} from 'react'
import FolderNaming from '../../component/FolderNaming.jsx'
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
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold mt-10 mb-8 text-black text-6xl">Youtube Link</h1>
      <div className="bg-stone-100 h-[40vh] w-[50vw] flex justify-center items-center rounded shadow-2xl">
      <input onChange={e => setUrl(e.target.value)} className="border border-gray-300 rounded-lg p-2 shadow-md"
          placeholder="Enter YouTube URL"></input>
      <button className="bg-gray-600 text-white ml-2 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"onClick={handleSubmit}>Submit</button>
      <FolderNaming
        divFolderNamingDisplay={divFolderNamingDisplay}
        setDivFolderNamingDisplay={setDivFolderNamingDisplay}
        material={material}
      />
      </div>
    </div>
  )
}

export default YoutubeURL