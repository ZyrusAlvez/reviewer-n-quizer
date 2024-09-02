import ChooseImport from "../component/main/ChooseImport.jsx";
import { useState } from "react";
import Navbar from '../component/Navbar.jsx';

const Main = () => {
  const [divImportDisplay, setDivImportDisplay] = useState("none");
  const [isGlassEffect, setIsGlassEffect] = useState(false);
  const list = ['Summarize', 'Reviewer', 'Flashcards', 'Multiple Choices', 'True or False', 'Fill in the blanks'];
  const slides = [
    { url: '/src/images/perps1.png' },
    { url: '/src/images/perps2.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }; {/*CONTAINER 2 left arrow logic*/}

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }; {/*CONTAINER 2 right arrow logic*/}

  function handleButtonClick(e) {
    e.stopPropagation(); // Prevent event propagation to parent div
    setDivImportDisplay("block");
    setIsGlassEffect(true);
  }

  function handleDivClick() {
    setDivImportDisplay("none");
    setIsGlassEffect(false);
  }

  return (
  <div>
    <Navbar />
    {/*CONTAINER 1 (file converter software)*/}
    <div className="flex flex-col justify-center items-center mb-10"> {/*CONTAINER 1 position*/}
      <div className="mt-1 h-36 w-3/4 rounded-lg text-center m-0"> {/*CONTAINER 1 design and margin*/}
        <h1 className="text-black font-bold text-5xl mt-6">File Converter Software</h1> {/*CONTAINER 1 texts*/}
        <p className="text-black text-2xl font-extralight">What do you want to do with the material?</p>
      </div>
      <div
        className={`h-full flex justify-center items-center relative ${isGlassEffect ? 'bg-black bg-opacity-50' : 'bg-white'}`}
        onClick={handleDivClick}>
        <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleButtonClick}>
          Try it for Free
        </button>
        {divImportDisplay === "block" && <ChooseImport />}
      </div>
    </div>
  </div>
  );
};

export default Main;
