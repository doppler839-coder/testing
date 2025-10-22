
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  useEffect(() => {
    gsap.from('.animate', { y: 50, opacity: 0, duration: 1, stagger: 0.2, scrollTrigger: '.animate' })
  }, [])
  
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold animate">Contact Page</h1>
      <p className="mt-4 animate">This is a placeholder content for Contact.</p>
    </div>
  )
}
