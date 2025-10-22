import React from 'react'
export default function Footer(){
  return (
    <footer className='bg-gray-50 border-t mt-12'>
      <div className='max-w-6xl mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-600'>
        <div>© {new Date().getFullYear()} Kewel Inc.</div>
        <div className='flex gap-4'>
          <a href='#'>Privacy</a>
          <a href='#'>Terms</a>
        </div>
      </div>
    </footer>
  )
}
