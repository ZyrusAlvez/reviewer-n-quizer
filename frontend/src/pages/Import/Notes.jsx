import React from "react";
import FolderNaming from "../../component/FolderNaming.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [divFolderNamingDisplay, setDivFolderNamingDisplay] = useState("none");
  const [style, setStyle] = useState({});
  const [material, setMaterial] = useState("");
  const navigate = useNavigate();

  function handleSubmitClick(e) {
    e.stopPropagation();
    setDivFolderNamingDisplay("block");
    setStyle({ background: "rgba(0, 0, 0, 0.5)" }); // Mock glass effect
  }

  function handleBackClick(e) {
    e.stopPropagation();
    navigate(-1);
  }

  function handleDivClick() {
    setDivFolderNamingDisplay("none");
    setStyle({ background: "white" });
  }

  return (
    <div
      style={{
        ...style,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      onClick={handleDivClick}
    >
      <textarea
        rows="20"
        cols="150"
        style={{ ...style, resize: "none", display: "block" }}
        onChange={(e) => setMaterial(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleBackClick}>back</button>
        <button onClick={handleSubmitClick}>Submit</button>
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
