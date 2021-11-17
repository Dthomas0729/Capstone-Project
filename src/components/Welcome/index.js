import React from 'react'
import { useNavigate } from 'react-router'
import './styles.css'

const Welcome = () => {

    const navigate = useNavigate()

    return (
        <section className='hero'>
            <h1>" Elevate " Your Theater Experience</h1>

            <div className='hero-buttons'>
                <button onClick={()=> navigate('/movies')}>Get Started</button>
                <button>Learn More</button>
            </div>
        </section>
    )
}

export default Welcome
