import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div className={`fixed top-0 left-0 h-full w-96 bg-purple-900 text-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4  hover:bg-black rounded-full transition-colors"
        >
          <IoClose className="w-6 h-6" />
        </button>

        <div className="p-8 pt-13">
          <h1 className="text-4xl font-bold mb-2">Get in touch</h1>
          
          <div className="w-full h-1 bg-purple-500 mb-8"></div>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            I'm always excited to take on new projects and collaborate with innovative minds.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Phone Number</h3>
              <p className="text-gray-300 text-lg">+91 7901494158</p>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Email</h3>
              <p className="text-gray-300 text-lg">adithyasrikar.54@gmail.com</p>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Linkedin</h3>
              <p className="text-gray-300 text-lg">adithya-srikar/</p>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Address</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                0811 Erdman Prairie Road,<br />
                Joaville, California 90210
              </p>
            </div>

            <div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Social</h3>
              <div className="flex space-x-4 mb-10">
                <a href="https://www.linkedin.com/in/adithya-srikar/" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <FaLinkedinIn className="w-5 h-5 text-gray-300" />
                </a>
                <a href="https://github.com/Adithya-srikar" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <FaGithub className="w-5 h-5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;