import React from 'react'
export default function AboutSection(){
  return (
    <section className='py-12'>
      <h2 className='text-2xl font-bold mb-6'>About</h2>
      <div className='md:flex gap-8 items-center'>
        <div className='md:w-1/2 mb-6 md:mb-0'>
          <div className='h-48 bg-gray-100 rounded-lg flex items-center justify-center'>Office / Team</div>
        </div>
        <div className='md:w-1/2'>
          <p className='text-gray-700 mb-4'>We build secure, compliant, and scalable solutions for healthcare providers and pharmaceutical companies.</p>
          <p className='text-gray-700'>Our mission is to make clinical operations simpler and more insightful through modern software.</p>
        </div>
      </div>
    </section>
  )
}
