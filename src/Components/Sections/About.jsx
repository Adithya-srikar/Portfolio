import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { IoDownloadOutline } from "react-icons/io5";
import photo from '../../assets/adithya.jpg';

export const About = () => {
  return (
    <div className="relative h-[640px] px-15 py-10 overflow-hidden">
      <div className='absolute inset-0 bg-[url("/src/assets/bg.svg")] bg-center opacity-15' />

      <div className="relative flex items-center justify-between h-full max-md:flex-col">
        <div className="space-y-4 max-w-[50%]">
          <h1 className="text-xl font-bold flex items-baseline gap-2">
            
            Hey, I'm<span className='bg-purple-400 text-4xl text-white px-2'> Adithya Srikar</span> 
            <motion.span
              whileHover={{ rotate: [0, 20, -10, 20, -10, 0] }}
              transition={{ duration: 0.8 }}
              className="inline-block text-4xl"
            >
              👋
            </motion.span>
          </h1>

          <p className="text-gray-600 text-lg pt-4 pb-8">
            I'm a passionate developer and Student with expertise in web and Android development.<br/><span className='text-blue-500'>&lt;p&gt;</span>hackathon enthusiast.<span className='text-blue-500'>&lt;/p&gt;</span><br/>When I'm not coding, you'll find me creating VFX art—a hobby that keeps my creative side sharp and brings a unique visual perspective 
             to my development work.
          </p>

          <div className="flex items-center gap-7  text-3xl">
            <a href="https://github.com/Adithya-srikar" target="_blank" >
              <FaGithub className="hover:text-black text-gray-700 transition" />
            </a>
            <a href="https://www.linkedin.com/in/adithya-srikar/" target='_blank' >
              <FaLinkedin className="hover:text-blue-600 text-black-700 transition" />
            </a>
            <a href="mailto:adithyasrikar.54@gmail.com" target="_blank">
              <SiGmail className="hover:text-red-400 text-black-700 transition" />
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1rCZBKGefsVQFykh0Db-bXfI5Kh9wH1B-/view?usp=drive_link" className='w-60 h-11 mt-20 rounded-lg  text-xl flex gap-1.5 items-center justify-center bg-purple-400 text-white hover:bg-yellow-500 transition-colors ease-in-out'>
          <IoDownloadOutline  />
          <p>Download my Resume</p>
          </a>
        </div>

        <div className="relative w-full h-full flex items-center-safe inset-2 justify-center ">
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
            className="w-[95%] h-[97%] object-cover rounded-full shadow-2xl shadow-purple-400"
          />
        </div>
      </div>
    </div>
  );
};
