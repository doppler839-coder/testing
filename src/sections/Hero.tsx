import React from 'react'
export default function Hero(){
  return (
    <section className='bg-white py-20'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8'>
        <div className='flex-1'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Empowering Innovation in Healthcare IT</h1>
          <p className='text-gray-700 mb-6'>Smart solutions for medical and pharmaceutical industries.</p>
          <a href='#product' className='inline-block bg-primary text-white px-6 py-3 rounded-lg'>Learn More</a>
        </div>
        <div className='flex-1'>
          <div className='h-64 bg-gray-100 rounded-lg flex items-center justify-center'>Hero visual / illustration</div>
        </div>
      </div>
    </section>
  )
}
