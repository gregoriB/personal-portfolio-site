import React from 'react'

interface IProps {
    emailSuccessful: boolean,
    isModalOpen: boolean,
    setIsModalOpen(val: boolean): void,
    setEmailSuccessful(val: boolean): void
}

const EmailModal: React.FC<IProps> = ({ emailSuccessful, setEmailSuccessful, isModalOpen, setIsModalOpen }) => {
    const handleToggleModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setEmailSuccessful(false), 700);
    }
    return (
        <div 
            className={`modal email-modal ${isModalOpen ? 'enter' : 'exit'}`}
            onClick={handleToggleModal}
        >
            <div className={`spinner ${!emailSuccessful && 'active'}`}></div>
            <div className={`main ${emailSuccessful ? 'active' : 'inactive'}`}>
                <div className='content'>
                    <div className='close-button close-modal'>X</div>
                    <div className='email-message'>
                        <div>Email Sent!</div>
                        <p>I'll be replying back to you very soon.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailModal;