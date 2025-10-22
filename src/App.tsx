import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/careers' element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
