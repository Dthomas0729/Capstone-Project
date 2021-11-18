import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './styles.css'

import { useParams } from 'react-router'

const { REACT_APP_TMDB_API_KEY } = process.env;

const handleSubmit = () => {
    console.log('add to order btn');
}

const MovieDetails = () => {
    const { id } = useParams();
    const tmdbIdUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    
    const [movie, setMovie] = useState({});
    // const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        try {
            axios.get(tmdbIdUrl).then((res) => {
                const movie = res.data;
                console.log(movie);

                const movieDetails = {
                    key: movie.id,
                    title: movie.title,
                    tmbdId: movie.id,
                    plot: movie.overview,
                    genreIds: movie.genre_ids,
                    popularity: movie.popularity,
                    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    releaseDate: movie.release_date,
                }
               
                setMovie(movieDetails);
            })
        }
        catch(err) {
            console.log(err)
        }
    }, [tmdbIdUrl]);

    return (
        <>
            <div className="movie-details">
                <img className='poster' src={movie.poster} alt='movie-poster'></img>
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>

                <div className="showtimes">
                    <button>2:45pm</button>
                    <button>4:00pm</button>
                    <button>6:00pm</button>
                    <button>9:45pm</button>
                </div>

                <p>{movie.plot}</p>
                <button onClick={handleSubmit}>Add To Order</button>
            </div>
        </>
    )
}

export default MovieDetails