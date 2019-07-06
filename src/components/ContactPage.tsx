import React, { useState } from 'react';
import EmailModal from './EmailModal'; 
import '../styles/contact-page.css';
import '../styles/modal-email.css';

type FormElem = React.ChangeEvent<HTMLFormElement>;

const formInitialState = {
    text: '', 
    isValid: null
}

const ContactMe = () => {
    interface MyObject {
        text: string;
        isValid: boolean | null;
    }
    
    const [nameField, setNameField] = useState<MyObject>(formInitialState);
    const [emailField, setEmailField] = useState<MyObject>(formInitialState);
    const [textField, setTextField] = useState<MyObject>(formInitialState);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [emailSuccessful, setEmailSuccessful] = useState<boolean>(false);
    const [emailModalMessage, setEmailModalMessage] = useState<string>('');

    const isFormValid: boolean | null = nameField.isValid && emailField.isValid && textField.text.length > 0;

    const handleNameValidation = (): void => {
        const name = nameField.text;
        const re = /^[A-Z a-z]*$/;
        const isValid : boolean = re.test(name) && name.length > 0;
        setNameField({
            ...nameField,
            text: nameField.text,
            isValid
        });
        if (!isValid) {
            setErrorMessage('Please enter your name')
        }
    };

    const handleEmailValidation = (): void => {
        const email = emailField.text;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(email);
        setEmailField({
            ...emailField,
            text: emailField.text,
            isValid
        });
        if (!isValid) {
            setErrorMessage('Please enter a valid email address')
        }
    };

    const handleTextAreaValidation = (): void => {
        const text = textField.text;
        const isValid = text.length > 0;
        setTextField({
            ...textField,
            text: textField.text,
            isValid
        });
        if (!isValid) {
            setErrorMessage('Please add a message')
        }
    };

    const handleClearFields = () => {
        setNameField(formInitialState);
        setEmailField(formInitialState);
        setTextField(formInitialState);
    }

    const handleSendDataToServer = async (e:FormElem) => {
        e.preventDefault();
        try {
            const response = await fetch("/.netlify/functions/sendEmail", {
            // const response = await fetch('http://localhost:34567/sendEmail', {
              method: 'POST',
              body: JSON.stringify({ "name": nameField.text, "email": emailField.text, "text": textField.text  }),
              headers: { 'Content-Type': 'application/json' } 
            });
            const json: string = await response.json();
            json && setTimeout(() => {
                setEmailModalMessage(JSON.parse(json).name);
                setEmailSuccessful(true);
            }, 1000);
            setTimeout(() => !json && setEmailSuccessful(true), 7000)
        } catch (error) {
            console.error(error);
            setEmailSuccessful(true);
        }
    }

    const handleSubmit = (e: FormElem ) => {
        e.preventDefault()
        if (isFormValid) {
            return (
                setIsModalOpen(true),
                setErrorMessage(''),
                handleSendDataToServer(e)
            )
        }
        handleTextAreaValidation();
        handleEmailValidation();
        handleNameValidation();
    }

    return (
        <div className='contact-page page'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h1>Message Me</h1>
                <input 
                    placeholder='Name'
                    name='name'
                    value={nameField.text}
                    onBlur={handleNameValidation}
                    onChange={ e => setNameField({ ...nameField, text: e.target.value }) }
                    className={ nameField.isValid ? 'valid' : nameField.isValid === null ? '' : 'invalid' }
                        
                />
                <input 
                    placeholder='your_email@email.com'
                    name='email'
                    value={emailField.text}
                    onBlur={handleEmailValidation}
                    onChange={ e => setEmailField({ ...emailField, text: e.target.value }) }
                    className={ emailField.isValid ? 'valid' : emailField.isValid === null ? '' : 'invalid' }
                />
                <textarea
                    placeholder='Enter your message here'
                    autoComplete='off'
                    value={textField.text}
                    onBlur={handleTextAreaValidation}
                    onChange={ e => setTextField({ ...textField, text: e.target.value}) }
                    className={ textField.isValid ? 'valid' : textField.isValid === null ? '' : 'invalid' }
                />
                <button 
                    type='submit' 
                    className={!isFormValid ? 'disabled' : undefined}
                >
                    SEND
                </button>
                <strong className='message'>{errorMessage}</strong>
            </form>
            <div className='contact-info'>
                <h2>Or contact me directly:</h2>
                <div>
                    <hr />
                    <p>Brandon Gregori</p>
                    <a href="mailto: brandon.gregori@gmail.com">brandon.gregori@gmail.com</a>
                    <p>(720) 260-4150</p>
                    <hr />
                </div>
            </div>
            <EmailModal
                clearFields={handleClearFields}
                emailSuccessful={emailSuccessful} 
                setEmailSuccessful={setEmailSuccessful} 
                isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
                message={emailModalMessage}
            />
        </div>
    );
}

export default ContactMe;