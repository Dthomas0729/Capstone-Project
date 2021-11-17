import React, { useState, useEffect } from 'react'
import MovieDetails from '../MovieDetails';

const Movies = (props) => {

    const [isViewingDetails, setIsViewingDetails ] = useState(false);

    useEffect(() => {
        if (props.isViewing) {
            setIsViewingDetails(true);
        }
    }, [props.isViewing])

    return ( isViewingDetails === true ? 
            <div>
                <h1>Viewing Details</h1>
                <MovieDetails />
            </div> 
        : 
            <div>
                <h1>Movies Playing Now In Theaters</h1>
            </div>
    )
}

export default Movies
