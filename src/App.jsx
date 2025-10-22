
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Company from './pages/Company'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/company' element={<Company />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}
