import React from 'react';
import Navbar from '../../components/Navbar';
import { GrNotes, GrDocumentPdf, GrLinkBottom } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Functions = () => {
  return (
    <div className="flex flex-col justify-between h-screen"> {/* parent */}
      <Navbar />

      <div className="flex justify-center items-start mt-36"> {/* position of upload file button */}
        <button
          type="button"
          className="text-black w-3/4 h-20 text-3xl hover:text-black-600 border border-white transition-colors duration-300 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          UPLOAD FILE
        </button>
      </div>

      <div className="flex justify-center items-end mb-48"> {/* position of upload-file-box*/}
        <div className="upload-file-box h-96 w-5/6 text-center rounded-lg p-4"> {/* Design of upload-file-box */}
          <div className="flex justify-between h-full">
            <div className="w-1/3 bg-white rounded-lg p-4 mr-10"> {/* container 1 */}
              <Link to="/sign"><GrNotes className="grnotes hover:text-sky-400 transition-colors duration-300" /></Link>
            </div>
            <div className="w-1/3 bg-white rounded-lg p-4 "> {/* container 2 */}
              <Link to="/sign"><GrDocumentPdf className="grdocumentpdf hover:text-sky-400 transition-colors duration-300"/></Link>
            </div>
            <div className="w-1/3 bg-white rounded-lg p-4 ml-10  "> {/* container 3 */}
              <Link to="/sign"><GrLinkBottom className="grlinkbottom hover:text-sky-400 transition-colors duration-300"/></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end h-20  w-full">  {/*no account? position and links*/}
        <div className="text-center p-4">
          <p>No account? <span className="text-sky-400 hover:text-sky-600 transition-colors duration-300"><Link to="/sign"> Sign Up</Link>
            </span></p>
        </div>
      </div>
    </div>
  );
}

export default Functions;
