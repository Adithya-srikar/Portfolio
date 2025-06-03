import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import { Navbar } from './Components/Navbar'

function App() {
  const [isLoaded,setisLoaded] =useState(false)

  return (
    <>{!isLoaded && <LoadingScreen onComplete={()=> setisLoaded(true)}/>}
    <div className='min-h-screen transition-opacity duration-700 ${isLoaded? "opacity-100" :" opacity-0"}' >
      <Navbar/>
    </div>
    </>
    )
}

export default App
