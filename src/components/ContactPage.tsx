import React, { useState, useEffect, useContext } from "react";
import EmailModal from "./EmailModal";
import "../styles/contact-page.css";
import "../styles/modal-email.css";
import { StateContext } from "../contexts/StateContext";

type FormElem = React.ChangeEvent<HTMLFormElement>;
type Blur = React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>;

const formInitialState = {
    text: "",
    isValid: null
};

const ContactMe = () => {
    interface MyObject {
        text: string;
        isValid: boolean | null;
    }
    const { isModalOpen, setIsModalOpen } = useContext(StateContext);

    const [nameField, setNameField] = useState<MyObject>(formInitialState);
    const [emailField, setEmailField] = useState<MyObject>(formInitialState);
    const [textField, setTextField] = useState<MyObject>(formInitialState);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isEmailSuccessful, setIsEmailSuccessful] = useState<boolean>(false);
    const [emailModalMessage, setEmailModalMessage] = useState<string>("");
    const [numEmailsSent, setNumEmailsSent] = useState<number>(0);

    const formJSXProperties = {
        onBlur: (e: Blur) => chooseValidationType(e),
        tabIndex: isModalOpen ? -1 : undefined,
        disabled: numEmailsSent > 2
    };

    const isFormValid: boolean | null =
        nameField.isValid && emailField.isValid && textField.text.length > 0;

    const chooseValidationType = (e: Blur): void => {
        switch (e.currentTarget.name) {
            case "name":
                nameValidation();
                break;
            case "email":
                emailValidation();
                break;
            case "message":
                textAreaValidation();
                break;
            default:
                break;
        }
    };

    const nameValidation = (): void => {
        const name = nameField.text;
        const re = /^[A-Z a-z]*$/;
        const isValid: boolean =
            re.test(name) && name.length > 0 && name.length <= 60;
        setNameField({
            ...nameField,
            text: nameField.text,
            isValid
        });
        if (!isValid) {
            setErrorMessage("Please enter your name");
        }
    };

    const emailValidation = (): void => {
        const email = emailField.text;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(email);
        setEmailField({
            ...emailField,
            text: emailField.text,
            isValid
        });
        if (!isValid) {
            setErrorMessage("Please enter a valid email address");
        }
    };

    const textAreaValidation = (): void => {
        const text = textField.text;
        const isValid = text.length > 0;
        setTextField({
            ...textField,
            text: textField.text,
            isValid
        });
        if (!isValid) {
            setErrorMessage("Please add a message");
        }
    };

    const clearFields = () => {
        setNameField(formInitialState);
        setEmailField(formInitialState);
        setTextField(formInitialState);
    };

    const sendDataToServer = async (e: FormElem) => {
        e.preventDefault();
        try {
            const response = await fetch("/.netlify/functions/sendEmail", {
                method: "POST",
                body: JSON.stringify({
                    name: nameField.text,
                    email: emailField.text,
                    text: textField.text
                }),
                headers: { "Content-Type": "text/plain" }
            });
            const json: string = await response.json();
            if (json) {
                setNumEmailsSent(numEmailsSent + 1);
                setEmailModalMessage(JSON.parse(json).name);
                setIsEmailSuccessful(true);
            }
            setTimeout(() => !json && setIsEmailSuccessful(true), 7000);
        } catch (error) {
            console.error(error);
            setIsEmailSuccessful(true);
        }
    };

    const handleSubmit = (e: FormElem) => {
        e.preventDefault();
        if (isFormValid) {
            return (
                setIsModalOpen(true), setErrorMessage(""), sendDataToServer(e)
            );
        }
        textAreaValidation();
        emailValidation();
        nameValidation();
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key !== "Escape") {
                return;
            }
            setIsModalOpen(false);
        };
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [setIsModalOpen]);

    return (
        <div className="contact-page page">
            <div className="stylish-container">
                <form className="contact-form contact" onSubmit={handleSubmit}>
                    <h1>Message Me</h1>
                    <input
                        placeholder={numEmailsSent > 2 ? "" : "Your Name"}
                        name="name"
                        value={nameField.text}
                        onChange={e =>
                            setNameField({ ...nameField, text: e.target.value })
                        }
                        className={
                            nameField.isValid
                                ? "valid"
                                : nameField.isValid === null
                                ? ""
                                : "invalid"
                        }
                        {...formJSXProperties}
                    />
                    <input
                        placeholder={
                            numEmailsSent > 2 ? "" : "your_email@address.com"
                        }
                        name="email"
                        value={emailField.text}
                        onChange={e =>
                            setEmailField({
                                ...emailField,
                                text: e.target.value
                            })
                        }
                        className={
                            emailField.isValid
                                ? "valid"
                                : emailField.isValid === null
                                ? ""
                                : "invalid"
                        }
                        {...formJSXProperties}
                    />
                    <textarea
                        placeholder={
                            numEmailsSent > 2
                                ? "EMAILS DISABLED"
                                : "Leave a message for me here..."
                        }
                        name="message"
                        value={textField.text}
                        onChange={e =>
                            setTextField({ ...textField, text: e.target.value })
                        }
                        className={
                            textField.isValid
                                ? "valid"
                                : textField.isValid === null
                                ? ""
                                : "invalid"
                        }
                        {...formJSXProperties}
                    />
                    <button
                        type="submit"
                        className={!isFormValid ? "disabled" : undefined}
                        aria-label="submit"
                    >
                        SEND
                    </button>
                    <strong className="message">{errorMessage}</strong>
                </form>
                <div className="contact-info contact">
                    <h2>Or contact me directly:</h2>
                    <div>
                        <hr />
                        <p>Brandon Gregori</p>
                        <a
                            href="mailto: brandon@brandon-gregori.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={isModalOpen ? -1 : 0}
                        >
                            brandon@brandon-gregori.com
                        </a>
                        <p>(720) 260-4150</p>
                        <hr />
                    </div>
                </div>
            </div>
            <EmailModal
                clearFields={clearFields}
                isEmailSuccessful={isEmailSuccessful}
                setIsEmailSuccessful={setIsEmailSuccessful}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                name={emailModalMessage}
            />
            <div className="decorative-1" />
        </div>
    );
};

export default ContactMe;
