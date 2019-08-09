import React from "react";

type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

interface IProps {
    isEmailSuccessful: boolean;
    isModalOpen: boolean;
    name: string;
    setIsModalOpen(val: boolean): void;
    setIsEmailSuccessful(val: boolean): void;
    clearFields(): void;
}

const EmailModal: React.FC<IProps> = ({
    isEmailSuccessful,
    setIsEmailSuccessful,
    isModalOpen,
    setIsModalOpen,
    name,
    clearFields
}) => {
    const toggleModal = (e: mouseEvent) => {
        if (!(e.target instanceof HTMLElement) || !e.target.dataset.util) {
            return;
        }
        setIsModalOpen(false);
        setTimeout(() => setIsEmailSuccessful(false), 700);
        name && clearFields();
    };
    return (
        <div
            className={`modal email-modal ${isModalOpen ? "enter" : "exit"}`}
            data-util="close"
            onClick={toggleModal}
        >
            <div className={`spinner ${!isEmailSuccessful && "active"}`} />
            <div
                className={`main ${isEmailSuccessful ? "active" : "inactive"}`}
            >
                <div className="content">
                    <div
                        className="close-button close-modal"
                        data-util="close"
                        tabIndex={1}
                    >
                        X
                    </div>
                    <div className="email-message">
                        {name ? (
                            <>
                                <h1>Email successfully sent!</h1>
                                <p>
                                    Hello, {name}. I'll be getting back to you
                                    in 1-2 days.
                                </p>
                            </>
                        ) : (
                            <>
                                <h1>Something went wrong!</h1>
                                <p>
                                    Please try sending your message again or
                                    contact me directly!
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailModal;
