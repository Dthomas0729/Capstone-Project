import React from 'react'
import { useNavigate } from 'react-router'

import './styles.css';

const GetTicketsBtn = (props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props.movie)
        navigate(`/movies/${props.movie.key}`);
    }

    return (
            <button 
                className='get-tickets-btn' 
                onClick={handleClick}
                >Get Tickets</button>
    )
}

export default GetTicketsBtn
