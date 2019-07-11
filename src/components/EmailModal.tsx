import React from 'react'

type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

interface IProps {
    emailSuccessful: boolean,
    isModalOpen: boolean,
    name: string,
    setIsModalOpen(val: boolean): void,
    setEmailSuccessful(val: boolean): void
    clearFields(): void;
}

const EmailModal: React.FC<IProps> = ({ emailSuccessful, setEmailSuccessful, isModalOpen, setIsModalOpen, name, clearFields }) => {
    const handleToggleModal = (e:mouseEvent) => {
        if (!(e.target instanceof HTMLElement) || !e.target.dataset.util) {

            return;
        }
        setIsModalOpen(false);
        setTimeout(() => setEmailSuccessful(false), 700);
        name && clearFields();
    }
    return (
        <div 
            className={`modal email-modal ${isModalOpen ? 'enter' : 'exit'}`}
            data-util='close'
            onClick={handleToggleModal}
        >
            <div className={`spinner ${!emailSuccessful && 'active'}`}></div>
            <div className={`main ${emailSuccessful ? 'active' : 'inactive'}`}>
                <div className='content'>
                    <div className='close-button close-modal' data-util='close'>X</div>
                    <div className='email-message'>
                        {
                            name 
                            ?
                                <>
                                    <h2>Email successfully sent!</h2>
                                    <p>Hello, {name}.  I'll be getting back to you in 1-2 days.</p>
                                </>
                            : 
                                <>
                                    <h1>Something went wrong!</h1>
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