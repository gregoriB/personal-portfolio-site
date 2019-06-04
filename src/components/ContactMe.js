import React from 'react'

export default function ContactMe() {
    return (
        <div className='content'>
            <div className='emails'>
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
                <form className='direct-email' action='mailto:brandon.gregori@gmail.com' target='_blank'>
                    <div>
                        <h1 className='direct-email-text'>Or click this button to email me directly from your email client:</h1>
                        <button>brandon.gregori@gmail.com</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
