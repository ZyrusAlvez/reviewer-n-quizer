import React from 'react';
import Navbar from '../../components/Navbar';

// If Typography is from a library, make sure to import it correctly.
// Import Typography if it is available in your project
// import { Typography } from '@material-tailwind/react'; // Example import

const Sign = () => {
  return (
    <div>
      <Navbar />
      <footer className="w-full bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="logo-ct"
            className="w-10"
          />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-blue-gray-600"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-blue-gray-600"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-blue-gray-600"
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-blue-gray-600"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <p className="text-center font-normal text-blue-gray-600">
          &copy; 2023 Material Tailwind
        </p>
      </footer>
    </div>
  );
}

export default Sign;
