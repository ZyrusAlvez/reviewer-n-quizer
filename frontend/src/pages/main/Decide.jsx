import React from 'react'
import Navbar from '../../components/Navbar';


const Decide = () => {
  return (
    <div>
        <Navbar/>
     <div class ="flex-col flex justify-center items-center mb-12">
      <div className=" mt-36 h-36 w-3/4 bg-white rounded-lg text-center"> {/*container design*/}
        <h1 className="text-black text-7xl mt-12 ">What do you want to do with the material?</h1>  {/*text design*/}
      </div>

      <div className="mt-8 w-3/4">
        <div className="bg-white text-center h-96 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-amber-100 h-40 rounded-lg"> <p className=" text-6xl mt-14 hover:text-sky-400 transition-colors duration-300">SUMMARIZE</p> </div>
                <div className="bg-amber-100 rounded-lg"> <p className=" text-6xl mt-14 hover:text-sky-400 transition-colors duration-300">REVIEWER</p></div>
                <div className="bg-amber-100 rounded-lg"> <p className=" text-6xl mt-14 hover:text-sky-400 transition-colors duration-300">FLASHCARDS</p></div>
                <div className="bg-amber-100 h-40 rounded-lg"> <p className=" text-5xl mt-10 hover:text-sky-400 transition-colors duration-300">MULTIPLE CHOICES</p> </div>
                <div className="bg-amber-100 rounded-lg"> <p className=" text-5xl mt-14 hover:text-sky-400 transition-colors duration-300">TRUE OR FALSE</p> </div>
                <div className="bg-amber-100 rounded-lg"> <p className=" text-5xl mt-10 hover:text-sky-400 transition-colors duration-300">FILL IN THE BLANKS</p> </div>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Decide