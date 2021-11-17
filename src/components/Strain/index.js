import React from 'react';

import './styles.css';

const Strain = (props) => {
    return (
        <a className="strain" href={`/cannabis/${props.name}`}>
                <div className='strain-details'>
                    <h3>{props.name}</h3>
                    <p>${props.price}</p>
                </div>

                <img className='strain-image' alt="strain" src={props.pictureUrl}></img>
            </a>
    )
}

export default Strain
