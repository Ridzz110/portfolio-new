"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openResumePopup = () => {
    setIsPopupOpen(true);
  };

  const closeResumePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className='fixed px-3 top-0 left-0 right-0 z-50 bg-black'>
        <div className='container mx-auto px-4'>
          <div className='h-16 flex flex-row justify-between items-center'>
            <Link href="/" passHref>
              <span className='font-poppins font-bold text-2xl tracking-wide text-purple-300 cursor-pointer'>
                RIDZZ
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <a
                href="/resume9-4-24.pdf"
                download
                className="bg-purple-300 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-400 transition-colors duration-300"
              >
               <Download />
              </a>
              <button
                onClick={openResumePopup}
                className="bg-purple-300 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-400 transition-colors duration-300"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Resume</h2>
              <button
                onClick={closeResumePopup}
                className="text-black hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <iframe
              src="/resume9-4-24.pdf"
              className="w-full flex-grow"
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;