import React, { useState } from 'react';
import '../styles/contact-form.css';

export default function ContactMe() {
    const [nameField, changeNameField] = useState({ text: '', isValid: null });
    const [emailField, changeEmailField] = useState({ text: '', isValid: null });
    const [textField, changeTextField] = useState({ text: '', isValid: null });
    const [errorMessage, setErrorMessage] =useState(null);

    const isFormValid = nameField.isValid && emailField.isValid && textField.isValid;

    const handleNameValidation = () => {
        const name = nameField.text;
        const re = /^[A-Z a-z]*$/;
        const isValid = re.test(name) && name.length;
        changeNameField({
            ...nameField,
            text: nameField.text.trim(),
            isValid
        });
        if (!isValid) {
            setErrorMessage('Please enter your name')
        }
    };

    const handleEmailValidation = () => {
        const email = emailField.text;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(email);
        changeEmailField({
            ...emailField,
            text: emailField.text.trim(),
            isValid
        });
        if (!isValid) {
            setErrorMessage('Please enter a valid email address')
        }
    };

    const handleTextAreaValidation = () => {
        const text = textField.text;
        const isValid = text.length;
        changeTextField({
            ...textField,
            text: textField.text.trim(),
            isValid
        });
        if (!isValid) {
            setErrorMessage('Please add a message')
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
        if (isFormValid) {
            
            return setErrorMessage('Email Sent!');
        }
        handleTextAreaValidation();
        handleEmailValidation();
        handleNameValidation();
    }

    return (
        <div className='email page'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h1>Message Me</h1>
                    <input 
                        placeholder='Name'
                        name='name'
                        value={nameField.text}
                        onBlur={handleNameValidation}
                        onChange={ e => changeNameField({ ...nameField, text: e.target.value }) }
                        className={ nameField.isValid ? 'valid' : nameField.isValid === null ? '' : 'invalid' }
                            
                    />
                    <input 
                        placeholder='your_email@email.com'
                        name='email'
                        value={emailField.text}
                        onBlur={handleEmailValidation}
                        onChange={ e => changeEmailField({ ...emailField, text: e.target.value }) }
                        className={ emailField.isValid ? 'valid' : emailField.isValid === null ? '' : 'invalid' }
                    />
                <textarea
                    placeholder='Enter your message here'
                    autoComplete='off'
                    value={textField.text}
                    onBlur={handleTextAreaValidation}
                    onChange={ e => changeTextField({ ...textField, text: e.target.value}) }
                    className={ textField.isValid ? 'valid' : textField.isValid === null ? '' : 'invalid' }
                />
                <button type='submit'>SEND</button>
                <strong className='message'>
                    {errorMessage}
                </strong>
            </form>
            <div className='contact-info'>
                <h2>Or contact me directly:</h2>
                <div>
                    <hr />
                    <p>Brandon Gregori</p>
                    <a href="mailto: brandon.gregori@gmail.com">brandon.gregori@gmail.com</a>
                    <p>Phone: (720) 260-4150</p>
                    <hr />
                </div>
            </div>
        </div>
    );
}
