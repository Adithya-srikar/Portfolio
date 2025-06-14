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
    </>

    )
}

export default App
