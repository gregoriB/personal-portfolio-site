import React from 'react'

interface IProps {
    emailSuccessful: boolean,
    isModalOpen: boolean,
    name: string,
    setIsModalOpen(val: boolean): void,
    setEmailSuccessful(val: boolean): void
    clearFields(): void;
}

const EmailModal: React.FC<IProps> = ({ emailSuccessful, setEmailSuccessful, isModalOpen, setIsModalOpen, name, clearFields }) => {
    const handleToggleModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setEmailSuccessful(false), 700);
        name && clearFields();
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
                        {
                            name 
                            ?
                                <>
                                    <div>Email successfully sent!</div>
                                    <p>Hello, {name}.  I'll be getting back to you in 1-2 days.</p>
                                </>
                            : 
                                <>
                                    <div>Something went wrong!</div>
                                    <p>Please try sending your message again or contact me directly!</p>
                                </>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailModal;