import React from 'react'
export default function ContactPreview(){
  return (
    <section className='py-12'>
      <h2 className='text-2xl font-bold mb-6'>Contact</h2>
      <div className='md:flex gap-8 items-start'>
        <div className='md:w-1/2'>
          <p className='text-gray-700'>For inquiries, please use the contact page where you can send a message directly to our team.</p>
        </div>
        <div className='md:w-1/2'>
          <a href='/contact' className='bg-primary text-white px-4 py-2 rounded-lg'>Go to Contact</a>
        </div>
      </div>
    </section>
  )
}
