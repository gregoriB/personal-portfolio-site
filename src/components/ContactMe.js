import React, { useState } from 'react';
import '../styles/contact-form.css';

export default function ContactMe() {
    const [nameField, changeNameField] = useState({ text: '', isValid: null });
    const [emailField, changeEmailField] = useState({ text: '', isValid: null });
    const [textField, changeTextField] = useState({ text: '', isValid: null });

    const handleNameValidation = () => {
        const name = nameField.text;
        const re = /^[A-Z a-z]*$/;
        const isValid = re.test(name) && name.length;
        changeNameField({
            ...nameField,
            isValid
        });
    };

    const handleTextAreaValidation = () => {
        const text = textField.text;
        const isValid = text.length;
        changeTextField({
            ...textField,
            isValid
        });
    };

    const handleEmailValidation = () => {
        const email = emailField.text;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(email);
        changeEmailField({
            ...emailField,
            isValid
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        if (nameField.isValid && emailField.isValid && textField.isValid) {
            
            return console.log('Sumbitted!')
        }
        handleNameValidation();
        handleEmailValidation();
        handleTextAreaValidation();
        console.log('INVALID FORM')
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
                        style={{
                            borderColor: nameField.isValid ? 'green' : nameField.isValid === null ? 'transparent' : 'red'
                        }}
                    />
                    <input 
                        placeholder='your_email@email.com'
                        name='email'
                        value={emailField.text}
                        onBlur={handleEmailValidation}
                        onChange={ e => changeEmailField({ ...emailField, text: e.target.value }) }
                        style={{
                            borderColor: emailField.isValid ? 'green' : emailField.isValid === null ? 'transparent' : 'red'
                        }}
                    />
                </div>
                <textarea
                    placeholder='Enter your message here'
                    autoComplete='off'
                    value={textField.text}
                    onBlur={handleTextAreaValidation}
                    onChange={ e => changeTextField({ ...textField, text: e.target.value}) }
                    style={{
                        borderColor: textField.isValid ? 'green' : textField.isValid === null ? 'transparent' : 'red'
                    }}
                />
                <button type='submit'>SEND</button>
            </form>
        </div>
    );
}
