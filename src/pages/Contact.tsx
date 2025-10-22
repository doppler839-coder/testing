import React, {useState} from 'react'
import axios from 'axios'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post(import.meta.env.VITE_API_BASE + '/api/contact', {name, email, message})
      setStatus('Message sent.')
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      setStatus('Failed to send message.')
    }
  }

  return (
    <div className='max-w-4xl mx-auto px-6 py-12'>
      <h1 className='text-3xl font-bold mb-6'>Contact</h1>
      <form onSubmit={submit} className='grid gap-4'>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder='Name' className='border p-3 rounded' required/>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' className='border p-3 rounded' type='email' required/>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder='Message' className='border p-3 rounded' required/>
        <button className='bg-primary text-white px-4 py-2 rounded'>Send</button>
        {status && <div className='text-sm text-gray-600'>{status}</div>}
      </form>
    </div>
  )
}
