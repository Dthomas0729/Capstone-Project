import React, { useState }from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import MoviePoster from '../MoviePoster';
import GetTicketsBtn from '../GetTicketsBtn';

import './styles.css'

const MoviesSlider = (props) => {

    // console.log(props.nowPlaying);
    // console.log(props.upcoming);

    const [nowPlaying, setNowPlaying] = useState(true)
    const [current, setCurrent] = useState(0);
    
    const length = (nowPlaying === true ? props.nowPlaying.length : props.upcoming.length);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    // const handleNowPlayingClick = () => {
    //     setNowPlaying(true)
    // }

    // const handleUpcomingClick = () => {
    //     setNowPlaying(false)
    // }

    if(!Array.isArray(props.nowPlaying) || props.nowPlaying.length <= 0) {
        return null;
    }
    
    if(!Array.isArray(props.upcoming) || props.upcoming.length <= 0) {
        return null;
    }

    return (

        <section className='slider'> 

            <div className='slider-links'>
                <button>Now Playing</button>
                <button>Upcoming</button> 
            </div>


           <FaChevronLeft className='left-arrow' onClick={prevSlide} />
           <FaChevronRight className='right-arrow' onClick={nextSlide} />
           
           {/* if (nowPlaying === true) {

           } */}
            {props.nowPlaying.map((movie, index) => {
                        return (
                            <>
                                <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster})` }}
                                    className={index === current ? 'slide active' : 'slide'} key={`${movie.key}-background`}>                                
                                </div>

                                <MoviePoster index={index} current={current} posterPath={`https://image.tmdb.org/t/p/w500${movie.poster}`}/>

                                <div className={index === current ? 'details-slide active' : 'details-slide'} key={`${movie.key}-details`}>
                                        <h1>{movie.title}</h1>
                                        <p>Release Date: {movie.releaseDate}</p>
                                        <GetTicketsBtn index={index} current={current} movie={movie}/>
                                </div>

                            </>

                        )
                    })}

        </section>
    )
}

export default MoviesSlider
