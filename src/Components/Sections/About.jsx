import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { IoDownloadOutline } from "react-icons/io5";
import photo from '../../assets/adithya.jpg';

export const About = () => {
  return (
    <div className="relative h-screen px-4 sm:px-8 md:px-12 lg:px-15 py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className='absolute inset-0 bg-[url("/src/assets/bg.svg")] bg-center opacity-15 pointer-events-none' />

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between h-full gap-10 lg:gap-0">
        <div className="space-y-4 max-w-full lg:max-w-[50%] md:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-xl font-bold flex items-baseline gap-2 flex-wrap justify-center lg:justify-start">
            Hey, I'm<span className='bg-purple-400 text-4xl text-white px-2 rounded'> Adithya Srikar</span>
            <motion.span
              whileHover={{ rotate: [0, 20, -10, 20, -10, 0] }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <img src="https://em-content.zobj.net/source/apple/96/waving-hand-sign_1f44b.png" className='w-8 sm:w-10'/>
            </motion.span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg pt-4 pb-8">
            I'm a passionate developer and Student with expertise in web and Android development.<br/><span className='text-blue-500'>&lt;p&gt;</span>hackathon enthusiast.<span className='text-blue-500'>&lt;/p&gt;</span><br/>When I'm not coding, you'll find me creating VFX art—a hobby that keeps my creative side sharp and brings a unique visual perspective 
             to my development work.
          </p>

          <div className="flex items-center gap-5 sm:gap-7 text-2xl sm:text-3xl justify-center lg:justify-start">
            <a href="https://github.com/Adithya-srikar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black text-gray-700 transition" />
            </a>
            <a href="https://www.linkedin.com/in/adithya-srikar/" target='_blank' rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600 text-black-700 transition" />
            </a>
            <a href="mailto:adithyasrikar.54@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail className="hover:text-red-400 text-black-700 transition" />
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1rCZBKGefsVQFykh0Db-bXfI5Kh9wH1B-/view?usp=drive_link" className='w-full sm:w-60 h-11 mt-10 sm:mt-20 rounded-lg text-lg sm:text-xl flex gap-1.5 items-center justify-center bg-purple-400 text-white hover:bg-yellow-500 transition-colors ease-in-out'  target="_blank" rel="noopener noreferrer">
          <IoDownloadOutline  />
          <p>Download my Resume</p>
          </a>
        </div>

        <div className="relative w-50 h-50 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[50%] flex items-center justify-center mb-8 lg:mb-0">
          <motion.div
            className="absolute w-full h-full rounded-full border-2 border-dotted border-purple-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          />
           <motion.div
            className="absolute w-full h-full rounded-full border-2 border-dotted border-purple-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 99, ease: "linear" }}
          />
          <img
            src={photo}
            alt="Adithya"
            className="w-[95%] h-[95%] object-cover rounded-full shadow-2xl shadow-purple-400 mx-auto lg:w-[400px] lg:h-[400px] "
          />
        </div>
      </div>
    </div>
  );
};
