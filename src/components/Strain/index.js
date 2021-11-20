import React from 'react';

import './styles.css';

const Strain = (props) => {
    return (
        <a className="strain" href={`/cannabis/${props.id}`}>
                <div className='strain-info'>
                    <h3>{props.name}</h3>
                    <p className="price">${props.price}</p>
                </div>

                <img className='strain-image' alt="strain" src={props.pictureUrl}></img>
            </a>
    )
}

export default Strain
