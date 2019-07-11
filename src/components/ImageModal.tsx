import React, { useRef, useContext } from 'react'
import '../styles/modal-image.css';
import { StateContext } from '../contexts/StateContext';

type mouseEvent = React.SyntheticEvent<HTMLDivElement>;

interface IProps {
    name: string,
    image: string,
    isImageVisible: boolean,
    handleToggleImage(val: mouseEvent): void
}

const ModalImage: React.SFC<IProps> = ({ name, image, isImageVisible, handleToggleImage }) => {
    const { isMobile } = useContext(StateContext);
    const hiddenImage = useRef<HTMLImageElement | null>(null)

    const handleClick = (e: mouseEvent) => {
        isImageVisible && handleToggleImage(e);
    }

    return (
        <div 
            id='hidden-image'
            className={`modal image-modal ${isImageVisible && 'active'}`}
            ref={hiddenImage}
            onClick={handleClick}
            data-util='image-close'
        >
            <div className='image-container'>
                <img 
                    data-util={`${isMobile && 'image-close'}`}
                    src={require(`../images/${image}`)} 
                    alt={name}
                />
                <div data-util='image-close' className='close-button close-image' onClick={handleToggleImage}>X</div>
            </div>
        </div>
    )
}

export default ModalImage;