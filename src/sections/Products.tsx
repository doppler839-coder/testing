import React from 'react'
export default function Products(){
  const items = [
    {title:'Product A', desc:'High-value feature for hospitals.'},
    {title:'Product B', desc:'Secure platform for pharma.'},
    {title:'Product C', desc:'Analytics and reporting.'},
  ]
  return (
    <section id='product' className='py-12'>
      <h2 className='text-2xl font-bold mb-6'>Product</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {items.map((it)=> (
          <div key={it.title} className='p-6 border rounded-lg shadow-sm hover:shadow-md transition'>
            <div className='h-32 bg-gray-100 rounded mb-4 flex items-center justify-center'>Image</div>
            <h3 className='font-semibold text-lg mb-2'>{it.title}</h3>
            <p className='text-gray-600'>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
