import React from 'react'
import { useNavigate } from 'react-router'
import MovieDetails from '../../pages/MovieDetails'

const GetTicketsBtn = (props) => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props.movie)
        return (<MovieDetails movie={props.movie} />)
    }

    return (
            <button 
                className='get-tickets-btn' 
                onClick={handleClick}
                >Get Tickets</button>
    )
}

export default GetTicketsBtn
