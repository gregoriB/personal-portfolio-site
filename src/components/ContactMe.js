import React from 'react'

export default function ContactMe() {
    return (
        <div className='content'>
            <form className='contact-form'>
                <h1>Contact Me</h1>
                <input 
                    placeholder='your_email@email.com'
                    name='email'
                />
                <textarea
                    placeholder='Enter your message here'
                    autoComplete='off'
                />
                <button type='submit'>SEND</button>
            </form>
        </div>
    )
}
