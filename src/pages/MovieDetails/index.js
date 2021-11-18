import React from 'react'
import './styles.css'

import { useParams } from 'react-router'

const MovieDetails = (props) => {
    const { id } = useParams();

    return (
        <>
            <div className="movie-details">
                <h2>{id}</h2>
                {/* <h1>{props.movie.title}</h1> */}
            </div>
        </>
    )
}

export default MovieDetails
