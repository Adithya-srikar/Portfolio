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





function App() {
  const [isLoaded,setisLoaded] =useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)} />}
      <div
        className={`flex flex-col min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <SectionSeparator />
        <div className="mt-7">
          <About />
          <SectionSeparator />
          <Skill />
          <SectionSeparator />
          <Experience />
          <SectionSeparator />
          <Projects />
          <SectionSeparator />
          <Education />
        </div>
      </div>
    </>

    )
}

export default App
