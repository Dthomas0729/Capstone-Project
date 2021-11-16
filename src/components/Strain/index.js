import React from 'react';

import './styles.css';

const Strain = (props) => {
    return (
        <a className="strain" href='/cannabis'>
                <div className='strain-details'>
                    <h3>{props.name}</h3>
                    <p>$10.99</p>
                </div>

                <img className='strain-image' alt="strain" src='https://images.unsplash.com/photo-1609270498861-e4bdbf5c4ed1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80'></img>
            </a>
    )
}

export default Strain
