import React from "react";
import { FaYoutube } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import  { CgNotes } from "react-icons/cg";


import { useNavigate } from "react-router-dom";


const ChooseImport = ({ divImportDisplay }) => {
  const navigate = useNavigate();

  return (
    <div className={`absolute h-[35vh] w-[60vw] bg-stone-200 border-[3px] border-gray-200 rounded-lg flex justify-around items-center ${divImportDisplay === 'block' ? 'block' : 'hidden'}`}
  onClick={(e) => e.stopPropagation()}>

  <div className="rounded-lg w-[23%] h-[90%] flex flex-col justify-around items-center border-b-1">
    <div className=" h-[80%] w-[94%] m-2">
      <p className="text-[14rem] text-sky-600 hover:text-stone-700 transition-colors duration-300"><CgNotes className="mr-2 color-white"/></p>
    </div>
    <button className="mb-2 bg-yellow-500 text-white py-2 px-20 rounded hover:bg-gray-900 transition duration-300"
      onClick={() => navigate("/notes")}> Notes </button>
  </div>

  <div className="rounded-lg w-[23%] h-[90%] flex flex-col justify-around items-center border-b-1">
   <div className=" h-[80%] w-[94%] m-2">
     <p className="text-[14rem] text-red-600 hover:text-stone-700 transition-colors duration-300"><FaYoutube className="mr-2" /></p>
    </div>
    <button className="bg-yellow-500 text-white py-2 px-16 rounded mb-2 hover:bg-gray-900 transition duration-300 flex items-center"
      onClick={() => navigate("/yturl")}>
       YouTube
    </button>
  </div>

  <div className="rounded-lg w-[23%] h-[90%] flex flex-col justify-around items-center border-b-1">
   <div className=" h-[80%] w-[94%] m-2">
     <p className="text-[14rem] text-green-600 hover:text-stone-700 transition-colors duration-300"><MdPictureAsPdf className="mr-2" /></p>
    </div>
    <button className="bg-yellow-500 font-bold border rounded text-white py-2 px-20 mb-2 hover:bg-green-700 transition duration-300 flex items-center">
       PDF
    </button>
  </div>
</div>
  );
};

export default ChooseImport;
