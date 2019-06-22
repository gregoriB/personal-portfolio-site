import React, { useRef, useContext } from 'react'
import '../styles/imageModal.css';
import { StateContext } from '../contexts/StateContext';

interface IProps {
    name: string,
    image: string
}


const ModalImage: React.SFC<IProps> = ({ name, image }) => {
    const { isImageVisible, isMobile, handleToggleImage } = useContext(StateContext);
    const hiddenImage = useRef<HTMLImageElement | null>(null)

    return (
        <div 
            id='hidden-image'
            className={`hidden-image ${isImageVisible && 'active'}`}
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