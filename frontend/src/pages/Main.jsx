import ChooseImport from "../component/main/ChooseImport.jsx";
import { useState} from "react";

const Main = () => {
  const [divImportDisplay, setDivImportDisplay] = useState("none");
  const [style, setStyle] = useState({});

  function handleButtonClick(e) {
    e.stopPropagation(); // Prevent the event when the event happened on the parent div
    setDivImportDisplay("block");
    setStyle({ background: "rgba(0, 0, 0, 0.5)" }); // Mock glass effect
  }

  function handleDivClick(){
    setDivImportDisplay("none")
    setStyle({background: "white"})
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
      <button onClick={handleButtonClick}>
        Import Material
      </button>
      <button onClick={() => localStorage.clear()}>Summarize</button>
      <ChooseImport divImportDisplay={divImportDisplay} />
    </div>
  );
};

export default Main;
