import ChooseImport from "../component/main/ChooseImport.jsx";
import { useState } from "react";
import Navbar from '../component/Navbar.jsx';

const Main = () => {
  const list = ['Summarize', 'Reviewer', 'Flashcards', 'Multiple Choices', 'True or False', 'Fill in the blanks'];
  const slides = [
    { url: '/src/component/perps1.png' },
    { url: '/src/component/perps2.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [divImportDisplay, setDivImportDisplay] = useState("none");
  const [isGlassEffect, setIsGlassEffect] = useState(false);

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
      <div className="flex flex-col justify-center items-center mb-10"> {/*CONTAINER 1 position*/}
        <div className="mt-1 h-36 w-3/4 rounded-lg text-center"> {/*CONTAINER 1 design and margin*/}
          <h1 className="text-black font-bold text-5xl mt-6">File Converter Software</h1> {/*CONTAINER 1 texts*/}
          <p className="text-black text-2xl font-extralight">What do you want to do with the material?</p>
        </div>

        {/*CONTAINER 2 (slideshow)*/}
        <div className="relative h-[650px] w-full py-20"> {/*CONTAINER 2 stone background position and color*/}
          <h1 className="text-black font-bold text-3xl absolute top-[10%] left-[13%] z-10">Manipulate files quickly.</h1> {/*CONTAINER 2 heading*/}

          <p className="text-gray-600 text-left text-2xl mb-5 absolute top-[17%] left-[13%] z-10">eLearning tool to <span className="text-yellow-500 font-bold">convert</span> <br /> quickly create online courses</p> {/*CONTAINER 2 text*/}

          <div className={`h-[150%] w-full top-[-26%] flex justify-center items-center absolute ${isGlassEffect ? "bg-opacity-15 bg-black z-20" : "z-20"}`} 
            onClick={handleDivClick}>
            <button type="button" className="absolute top-[45%] left-[13%] mt-3 mb-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white font-bold transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5"
              onClick={handleButtonClick}> TRY FOR FREE </button> {/*CONTAINER 2 button design and position*/}
            <ChooseImport divImportDisplay={divImportDisplay}  />

            <p className="text-black mt-3 absolute top-[53%] left-[13%] z-[-1]">No account? <span className="text-sky-400 hover:text-sky-600 underline transition-colors duration-300">Sign up</span></p>  {/*CONTAINER 2 no account?*/}

            <img src="src/component/confi.png" alt="Logo" className="w-[30%] absolute top-[49%] left-[4%] z-[-1]" /> {/* logo CONFI */}

            <div className="relative h-[660px] w-[1120px] py-20 mt-[-3%] ml-[31%] z-[-1]"> {/*CONTAINER 2 position of image*/}
              <div 
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
                className="w-full h-full bg-center bg-cover duration-300 flex flex-col justify-center items-start"
              > {/*CONTAINER 2 image link*/}
              </div>

              <div className="hover:block absolute top-[50%] -translate-x-0 translate-x-[-2095%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ease-in-out" onClick={goToPrevious}> &lt; </div> {/*CONTAINER 2 left button*/}

              <div className="hover:block absolute top-[50%] -translate-x-0 translate-y-[-10%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ease-in-out" onClick={goToNext}> &gt; </div> {/*CONTAINER 2 right button*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
