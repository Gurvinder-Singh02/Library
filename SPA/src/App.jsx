import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  )
}

export default App