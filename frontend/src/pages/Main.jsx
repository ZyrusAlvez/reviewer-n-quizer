import ChooseImport from "../component/main/ChooseImport.jsx";
import bg from '../component/mac_bg.png';
import { useState } from "react";
import Navbar from '../component/Navbar.jsx';
import { FaFolderOpen } from "react-icons/fa";
import perps1 from '../component/perps1.png'; // Correctly import the images
import perps2 from '../component/perps2.png'; // Correctly import the images

const Main = () => {
  const list = [<FaFolderOpen />, <FaFolderOpen />, <FaFolderOpen />, <FaFolderOpen />, <FaFolderOpen />, <FaFolderOpen />];
  const slides = [
    { url: perps1 }, // Use imported images
    { url: perps2 }, // Use imported images
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [divImportDisplay, setDivImportDisplay] = useState("none");
  const [isGlassEffect, setIsGlassEffect] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="mt-1 h-36 w-3/4 rounded-lg text-center">
          <h1 className="text-black font-bold text-5xl mt-6">File Converter Software</h1>
          <p className="text-black text-2xl font-extralight">What do you want to do with the material?</p>
        </div>

        {/* Slideshow container */}
        <div className="relative h-[650px] w-full py-20">
          <h1 className="text-black font-bold text-3xl absolute top-[10%] left-[13%] z-10">Manipulate files quickly.</h1>
          <p className="text-gray-600 text-left text-2xl mb-5 absolute top-[17%] left-[13%] z-10">
            eLearning tool to <span className="text-yellow-500 font-bold">convert</span> <br /> quickly create online courses
          </p>

          {/* Glass effect overlay */}
          <div
            className={`absolute top-[-26%] h-[150%] inset-0 flex justify-center items-center ${isGlassEffect ? "bg-opacity-20 bg-black z-20" : "z-20"}`}
            onClick={handleDivClick}
          >
            <button
              type="button"
              className="absolute top-[45%] left-[13%] mt-3 mb-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white font-bold transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5"
              onClick={handleButtonClick}
            >
              TRY FOR FREE
            </button>
            <ChooseImport divImportDisplay={divImportDisplay} />

            <p className="text-black mt-3 absolute top-[53%] left-[13%] z-[-1]">
              No account? <span className="text-sky-400 hover:text-sky-600 underline transition-colors duration-300">Sign up</span>
            </p>

            <img src="src/component/confi.png" alt="Logo" className="w-[30%] absolute top-[49%] left-[4%] z-[-1]" /> {/* Logo */}

            <div className="relative h-[660px] w-[1120px] py-20 mt-[-3%] ml-[31%] z-[-1]">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full bg-center bg-cover duration-300 flex flex-col justify-center items-start"
              ></div>

              {/* Left arrow */}
              <div
                className="hover:block absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ease-in-out"
                onClick={goToPrevious}
              >
                &lt;
              </div>

              {/* Right arrow */}
              <div
                className="hover:block absolute top-[50%] -translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ease-in-out"
                onClick={goToNext}
              >
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-black font-bold text-5xl">Explore Confi</h1>
        <p className="text-black text-2xl font-extralight">Manage Files with tools.</p>
      </div>

      <div className="flex overflow-x-scroll space-x-4 p-4">
        <div className="w-[19%] h-3/4 bg-blue-500 flex-shrink-0 rounded-lg shadow-md " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p className="text-white p-4">hey</p>
        <div className="w-[full] rounded-lg bg-stone-100 mt-[50%] h-[-10] flex justify-start">
            <h1 className="text-black mt-[19%] mb-[10%] text-4xl font-bold">Upload Files</h1>
        <button className="overflow-visible text-5xl absolute top-[127%] left-[13%] mr-2 border-4 border-stone-800 bg-stone-100 w-[102px] h-[10%] rounded-[50%] hover:bg-stone-100 transition-colors duration-300">
                <FaFolderOpen className="text-stone-800 ml-[30px] text-4xl hover:text-stone-500 transition-colors duration-300" />
        </button>
       </div>
       
      </div>
      <div className="w-[19%] h-3/4 bg-blue-500 flex-shrink-0 rounded-lg shadow-md " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p className="text-white p-4">hey</p>
        <div className="w-[full] rounded-lg bg-stone-100 mt-[50%] h-[-10] flex justify-start">
            <h1 className="text-black mt-[19%] mb-[10%] text-4xl font-bold">Upload Files</h1>
        <button className="overflow-visible text-5xl absolute top-[127%] left-[13%] mr-2 border-4 border-stone-800 bg-stone-100 w-[102px] h-[10%] rounded-[50%] hover:bg-stone-100 transition-colors duration-300">
                <FaFolderOpen className="text-stone-800 ml-[30px] text-4xl hover:text-stone-500 transition-colors duration-300" />
        </button>
       </div>
       
      </div>
      <div className="w-[19%] h-3/4 bg-blue-500 flex-shrink-0 rounded-lg shadow-md " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p className="text-white p-4">hey</p>
        <div className="w-[full] rounded-lg bg-stone-100 mt-[50%] h-[-10] flex justify-start">
            <h1 className="text-black mt-[19%] mb-[10%] text-4xl font-bold">Upload Files</h1>
        <button className="overflow-visible text-5xl absolute top-[127%] left-[13%] mr-2 border-4 border-stone-800 bg-stone-100 w-[102px] h-[10%] rounded-[50%] hover:bg-stone-100 transition-colors duration-300">
                <FaFolderOpen className="text-stone-800 ml-[30px] text-4xl hover:text-stone-500 transition-colors duration-300" />
        </button>
       </div>
       
      </div>
      <div className="w-[19%] h-3/4 bg-blue-500 flex-shrink-0 rounded-lg shadow-md " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p className="text-white p-4">hey</p>
        <div className="w-[full] rounded-lg bg-stone-100 mt-[50%] h-[-10] flex justify-start">
            <h1 className="text-black mt-[19%] mb-[10%] text-4xl font-bold">Upload Files</h1>
        <button className="overflow-visible text-5xl absolute top-[127%] left-[13%] mr-2 border-4 border-stone-800 bg-stone-100 w-[102px] h-[10%] rounded-[50%] hover:bg-stone-100 transition-colors duration-300">
                <FaFolderOpen className="text-stone-800 ml-[30px] text-4xl hover:text-stone-500 transition-colors duration-300" />
        </button>
       </div>
       
      </div>
      <div className="w-[19%] h-3/4 bg-blue-500 flex-shrink-0 rounded-lg shadow-md " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p className="text-white p-4">hey</p>
        <div className="w-[full] rounded-lg bg-stone-100 mt-[50%] h-[-10] flex justify-start">
            <h1 className="text-black mt-[19%] mb-[10%] text-4xl font-bold">Upload Files</h1>
        <button className="overflow-visible text-5xl absolute top-[127%] left-[13%] mr-2 border-4 border-stone-800 bg-stone-100 w-[102px] h-[10%] rounded-[50%] hover:bg-stone-100 transition-colors duration-300">
                <FaFolderOpen className="text-stone-800 ml-[30px] text-4xl hover:text-stone-500 transition-colors duration-300" />
        </button>
       </div>
       
      </div>
      <div className="w-[19%] h-3/4 bg-blue-500 flex-shrink-0 rounded-lg shadow-md " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <p className="text-white p-4">hey</p>
        <div className="w-[full] rounded-lg bg-stone-100 mt-[50%] h-[-10] flex justify-start">
            <h1 className="text-black mt-[19%] mb-[10%] text-4xl font-bold">Upload Files</h1>
        <button className="overflow-visible text-5xl absolute top-[127%] left-[13%] mr-2 border-4 border-stone-800 bg-stone-100 w-[102px] h-[10%] rounded-[50%] hover:bg-stone-100 transition-colors duration-300">
                <FaFolderOpen className="text-stone-800 ml-[30px] text-4xl hover:text-stone-500 transition-colors duration-300" />
        </button>
       </div>
       
      </div>
      
      
        
      </div>
    </div>
  );
};

export default Main;
