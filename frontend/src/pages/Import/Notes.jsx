import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FolderNaming from "../../component/FolderNaming.jsx";


const Notes = () => {
  const [divFolderNamingDisplay, setDivFolderNamingDisplay] = useState("none");
  const [material, setMaterial] = useState("");
  const navigate = useNavigate();

  function handleSubmitClick(e) {
    e.stopPropagation();
    setDivFolderNamingDisplay("block");
  }

  function handleBackClick(e) {
    e.stopPropagation();
    navigate(-1);
  }

  function handleDivClick() {
    setDivFolderNamingDisplay("none");
  }

  return (
    <div onClick={handleDivClick} className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold mt-10 mb-8 text-black text-6xl">Create reviewer</h1>

      {/* Text area design */}
      <textarea
        rows="20"
        cols="150"
        className="bg-stone-100 w-[90%] mx-auto text-black rounded-lg shadow-2xl p-4" 
        onChange={(e) => setMaterial(e.target.value)} placeholder="Enter Text Here."
      ></textarea>

      {/* Button container */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        onClick={handleBackClick}> Back </button>
        <button
          className="border bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>

      <FolderNaming
        divFolderNamingDisplay={divFolderNamingDisplay}
        setDivFolderNamingDisplay={setDivFolderNamingDisplay}
        material={material}
      />
    </div>
  );
};

export default Notes;
