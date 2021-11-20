import React from 'react'
import { useNavigate } from 'react-router'

import dopeTheater from '../../images/dope_theater.jpg';
import './styles.css'

const Welcome = () => {

    const navigate = useNavigate()

    return (
        <section style={{ backgroundImage: `url(${dopeTheater})` }} className='hero'>
        
            <h1>" Elevate " Your Theater Experience</h1>

            <div className='hero-buttons'>
                <button className='get-started' onClick={()=> navigate('/movies')}>Get Started</button>
                {/* <button className='learn-more'>Learn More</button> */}
            </div>
        </section>
    )
}

export default Welcome
