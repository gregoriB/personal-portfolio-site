import React, { useState } from 'react';
import '../styles/contact-form.css';

export default function ContactMe() {
    const [nameField, changeNameField] = useState({ text: '', isValid: null });
    const [emailField, changeEmailField] = useState({ text: '', isValid: null });
    const [textField, changeTextField] = useState({ text: '', isValid: null });
    const [errorMessage, setErrorMessage] =useState(null);

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
        if (nameField.isValid && emailField.isValid && textField.isValid) {
            setErrorMessage('Email Sent!')
            return;
        }
        handleTextAreaValidation();
        handleEmailValidation();
        handleNameValidation();
    }

    return (
        <div className='emails'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h1>Contact Me</h1>
                <div>                
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
                </div>
                <textarea
                    placeholder='Enter your message here'
                    autoComplete='off'
                    value={textField.text}
                    onBlur={handleTextAreaValidation}
                    onChange={ e => changeTextField({ ...textField, text: e.target.value}) }
                    className={ textField.isValid ? 'valid' : textField.isValid === null ? '' : 'invalid' }
                />
                <button type='submit'>SEND</button>
                <strong>
                    {errorMessage}
                </strong>
            </form>
        </div>
    );
}
