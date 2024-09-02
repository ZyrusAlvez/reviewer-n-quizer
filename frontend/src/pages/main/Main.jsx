import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
const Main = () => {
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

  return (
    <div>
      <Navbar />
      {/*CONTAINER 1 (file converter software)*/}
      <div className="flex flex-col justify-center items-center mb-10"> {/*CONTAINER 1 position*/}
        <div className="mt-1 h-36 w-3/4 rounded-lg text-center m-0"> {/*CONTAINER 1 design and margin*/}
          <h1 className="text-black font-bold text-5xl mt-6">File Converter Software</h1> {/*CONTAINER 1 texts*/}
          <p className="text-black text-2xl font-extralight">What do you want to do with the material?</p>
        </div>

        {/*CONTAINER 2 (slideshow)*/}
        <div className="h-[650px] w-full py-20"> {/*CONTAINER 2 stone background position and color*/}
         <h1 className="text-black font-bold text-3xl top-[32%] ml-[13%] absolute z-10">Manipulate files quickly.</h1> {/*CONTAINER 2 heading*/}

         <p className="text-gray-600 text-left text-2xl mb-5 ml-[13%] top-[0%] relative z-10">eLearning tool to <span className="text-yellow-500 font-bold">convert</span> <br/> quickly create online courses</p> {/*CONTAINER 2 text*/}

           <button type="button" className="mt-3 mb-2 ml-[13%] text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white font-bold transition-colors duration-300 focus:ring-4
            focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5">TRY FOR FREE</button> {/*CONTAINER 2 button design and position*/}

             <p className="text-black mt-3 ml-[13%]">No account? <span className="text-sky-400 hover: text-sky-600 underline transition-colors duration-300">Sign up</span></p>  {/*CONTAINER 2 no account?*/}

              <img src="src/images/confi.png" alt="Logo" className="w-[30%] ml-[4%] mt-[-4%]" /> {/* logo  CONFI */}

             <div className="h-[660px] w-[1120px] py-20 mt-[-600px] ml-[31%] relative group"> {/*CONTAINER 2 position of image*/}
              <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="text-center w-full h-full bg-center bg-cover duration-300 flex flex-col justify-center items-start"> {/*CONTAINER 2 image link*/}
            </div>

            <div className="hover:block absolute top-[50%] -translate-x-0 translate-y-[-10%] left-[-40%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ease-in-out" onClick={goToPrevious}> &lt; </div> {/*CONTAINER 2 left button*/}

            <div className="hover:block absolute top-[50%] -translate-x-0 translate-y-[-10%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ease-in-out" onClick={goToNext}> &gt; </div> {/*CONTAINER 2 right button*/}
          </div>
        </div>

        <h1 className="text-black text-6xl mt-5 font-bold">Manipulate Material</h1>
        <p className="text-black text-xl">What do you want to do with the file?</p>
         
        <div className="mt-8 h-96 w-full bg-stone-100 rounded-lg text-center relative">
          <ul className="flex flex-row gap-2 overflow-y-auto">
            {list.map((item, index) => (
              <li key={index} className="px-64 py-10 bg-gray-800 rounded-lg mt-8 h-80 w-full text-white">
                {item}
              </li> 
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
