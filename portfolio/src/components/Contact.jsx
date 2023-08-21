import React from 'react'

function Contact() {
  return (

    <div name='contact' className='w-full h-screen bg-light-green flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/95df6f11-43ad-43ab-b850-04b599387e69" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-dark-green text-gray-300'>Contact</p>
                <p className='text-dark-green py-4'>Submit the form below or shoot me an email - nicholas.c.muller@gmail.com</p>
            </div>
            <input className='p-2 bg-gray placeholder-dark-green border border-dark-green' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray placeholder-dark-green border border-dark-green' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray p-2 placeholder-dark-green border border-dark-green' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-dark-green hover:border-dark-green hover:text-light-green px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact