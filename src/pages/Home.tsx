import React from 'react'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import AboutSection from '../sections/AboutSection'
import ContactPreview from '../sections/ContactPreview'
import CareersPreview from '../sections/CareersPreview'

export default function Home(){
  return (
    <div>
      <Hero />
      <div className='max-w-6xl mx-auto px-6'>
        <Products />
        <AboutSection />
        <ContactPreview />
        <CareersPreview />
      </div>
    </div>
  )
}
