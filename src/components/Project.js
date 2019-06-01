import React from 'react'

export default function Project(props) {
    console.log(props.image)
    const pathToImages = require.context('../images', true);
    return (
        <div className='project'>
            {props.name}
            <img src={pathToImages(`${props.image}`, true)} alt={props.name} />
        </div>
    );
}