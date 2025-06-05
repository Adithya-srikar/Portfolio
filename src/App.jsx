import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import { Navbar } from './Components/Navbar'
import {About} from './Components/Sections/About'
import {Skill} from './Components/Sections/Skill'
import {Experience} from './Components/Sections/Experience'
import {Education} from './Components/Sections/Education'
import { Projects } from './Components/Sections/Projects'
import { SectionSeparator } from './Components/SectionSeparator'
import {Leet_Git} from './Components/Sections/Leet_Git'
import { motion } from 'framer-motion';

function App() {
  const [isLoaded,setisLoaded] =useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)} />}
      <div
        className={`flex flex-col min-h-screen transition-opacity duration-700 bg-gray-100  ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <div className="mt-30  flex flex-col items-center space-y-6">
          <div className='w-[90%] bg-white mx-auto max-w-screen-xl ring-1 ring-purple-300 shadow-xs shadow-purple-300 border-purple-400 rounded-xl '>
            <About />
          </div>
          <div className='mt-15 w-[85%] bg-black h-[200px] rounded-lg'>
            <Skill />
          </div>
          <div className='flex flex-row h-[400px] w-[85%] space-x-5 '>
            <Leet_Git/>
            <Experience />
          </div>
            <Projects />
            <Education />
        </div>
      </div>
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="absolute bg-gradient-to-r from-red-500 to-red-600 shadow-lg transform origin-top-left"
          style={{
            width: '120%',
            height: '80px',
            top: '15%',
            left: '-10%',
            transform: 'rotate(25deg)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
          initial={{ 
            scaleX: 0,
            rotateZ: 25 
          }}
          animate={{ 
            scaleX: 1,
            rotateZ: 25 
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="flex items-center justify-center h-full">
            <motion.span 
              className="text-white font-bold text-2xl md:text-3xl tracking-wider drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              SITE UNDER CONSTRUCTION
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* Rubber Band Overlay - Second Band (Top-right to Bottom-left) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.div
          className="absolute bg-gradient-to-r from-red-600 to-red-500 shadow-lg transform origin-top-right"
          style={{
            width: '120%',
            height: '80px',
            top: '60%',
            right: '-10%',
            transform: 'rotate(-25deg)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
          initial={{ 
            scaleX: 0,
            rotateZ: -25 
          }}
          animate={{ 
            scaleX: 1,
            rotateZ: -25 
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2
          }}
        >
          <div className="flex items-center justify-center h-full">
            <motion.span 
              className="text-white font-bold text-xl md:text-2xl  drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              🚧 COMING SOON 🚧
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* Elastic bounce effect for the bands */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Subtle overlay to give rubber band effect */}
        <div 
          className="absolute bg-red-500 opacity-10"
          style={{
            width: '120%',
            height: '80px',
            top: '15%',
            left: '-10%',
            transform: 'rotate(25deg)',
            filter: 'blur(4px)',
          }}
        />
        <div 
          className="absolute bg-red-500 opacity-10"
          style={{
            width: '120%',
            height: '80px',
            top: '60%',
            right: '-10%',
            transform: 'rotate(-25deg)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>

      {/* Dim overlay to make content appear behind */}
      <motion.div
        className="fixed inset-0 bg-black/30 bg-opacity-20 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </>

    )
}

export default App
