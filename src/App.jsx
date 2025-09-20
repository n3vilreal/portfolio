import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Navigation from './Components/Navigation.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Overview from './Components/Overview.jsx'
import Music from './Components/Music.jsx'
import Interests from './Components/Interests.jsx'
import Projects from './Components/Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-full min-h-screen m-0 p-0 bg-[#010409]'>
          <Navbar/>
          <Navigation/>
          <hr className='bg-gray-300 h-0.5 my-2'/>
          <Routes>
            <Route path="/" element={<Overview/>} />
            <Route path="/interests" element={<Interests/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/music" element={<Music/>} />

          </Routes>
        </div>
  )
}

export default App
