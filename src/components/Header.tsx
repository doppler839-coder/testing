import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-white shadow-sm sticky top-0 z-40'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='text-xl font-bold text-gray-900'>Kewel</Link>
        <nav className='hidden md:flex gap-6 items-center'>
          <Link to='/' className='hover:underline'>Home</Link>
          <Link to='/product' className='hover:underline'>Product</Link>
          <Link to='/company' className='hover:underline'>Company</Link>
          <Link to='/careers' className='hover:underline'>Careers</Link>
          <Link to='/contact' className='text-white bg-primary px-4 py-2 rounded-lg'>Contact</Link>
        </nav>
        <div className='md:hidden'>
          {/* simple mobile menu placeholder */}
        </div>
      </div>
    </header>
  )
}
