import React from 'react'

import './styles.css';

const MoviePoster = (props) => {


    return (
            <img className={props.index === props.current ? 'main-poster active' : 'main-poster'} 
            key={`b${props.index}`}
            src={props.posterPath} 
            alt={'Movie Poster'}></img>
    )
}

export default MoviePoster
