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

    return (
        <div 
            id='hidden-image'
            className={`modal image-modal ${isImageVisible && 'active'}`}
            ref={hiddenImage}
            onClick={handleToggleImage}
            data-util='close'
        >
            <div className='image-container'>
                <img 
                    data-util={`${isMobile && 'close'}`}
                    src={require(`../images/${image}`)} 
                    alt={name}
                    onClick={handleToggleImage}
                />
                <div data-util='close' className='close-button close-image' onClick={handleToggleImage}>X</div>
            </div>
        </div>
    )
}

export default ModalImage;