import React, { useState } from 'react'

const server = process.env.REACT_APP_ELASTIC_MAIL_SERVER
const userName = process.env.REACT_APP_ELASTIC_MAIL_USERNAME
const password = process.env.REACT_APP_ELASTIC_MAIL_PASSWORD

function ContactForm() {  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  function sendEmail(name, email, subject, body) {
    const emailObj = {
      Host: server,
      Username: userName,
      Password: password,
      To: email,
      From: userName,
      Subject: subject,
      Body: body,
    }

    window.Email.send(emailObj).then(function (message) {
      alert(message)
    })
  }

  function handleClick() {
    sendEmail(name, email, subject, body)   
  }

  return (
    <form
      method='post'
      className='bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 w-6/12'
    >
      <div className='mb-6'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2 text-left'
          htmlFor='name'
        >
          Name
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='name'
          placeholder='Name'
          autoComplete='off'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='mb-6'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2 text-left'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='email'
          id='email'
          placeholder='Email'
          autoComplete='off'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='mb-6'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2 text-left'
          htmlFor='subject'
        >
          Subject
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='subject'
          placeholder='Subject'
          autoComplete='off'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className='mb-6'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2 text-left'
          htmlFor='message'
        >
          Message
        </label>
        <textarea
          className='form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded'
          placeholder='Message'
          id='body'
          cols='30'
          rows='15'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className='flex items-center justify-between'>
        <button
          className='w-full bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='button'
          id='sendBtn'
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm