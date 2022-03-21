import React, { useState, useEffect } from 'react';
 
import './styles.css';

const AgePopup = props => {

  return (
    <div className="age-verify">
        <div className="text-container">
            <h1>You must be over 21 years old to visit this site</h1>
            <p>Please, verify your age below.</p>
            <button onClick={() => props.setAge(21)}>Yes, I am over 21</button>
            <button>No, I am not over 21</button>
        </div>
    </div>
  )
}

export default AgePopup