import React from 'react';

import './styles.css';

const MenuItem = (props) => {
    return (
        <a className="menuItem" href={`/Menu/${props.id}`}>
                <div className='menuItem-info'>
                    <h3>{props.name}</h3>
                    <p className="price">${props.price}</p>
                </div>

                <img className='menuItem-image' alt="menuItem" src={props.pictureUrl}></img>
            </a>
    )
}

export default MenuItem
