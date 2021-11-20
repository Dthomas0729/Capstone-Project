import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useAlert } from 'react-alert'
import axios from 'axios';

import './styles.css'


const { REACT_APP_TMDB_API_KEY } = process.env;

const MovieDetails = (props) => {
    const alert = useAlert();
    const navigate = useNavigate();
    const { id } = useParams();
    const tmdbIdUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    
    const [movie, setMovie] = useState({});
    const [startTime, setStartTime] = useState('2:45pm');

    const handleSubmit = () => {
        const orderData = {
            movie: movie,
            startTime: startTime,
        }
        
        localStorage.setItem('movieOrder', JSON.stringify(orderData))
        alert.show(`1 ticket for ${movie.title} added to order`);
        
        if (localStorage.getItem('strainOrder')) {
            navigate('/order');
        } else {
            navigate('/cannabis');
        }
    }
    
    const handleStartTime = (e) => {
        const time = e.target.value;
        setStartTime(time);
        console.log(time)
    }

    useEffect(() => {
        try {
            axios.get(tmdbIdUrl).then((res) => {
                const movie = res.data;

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
                    <select onChange={handleStartTime} value={startTime}>
                        <option value='2:45pm'>2:45pm</option>,
                        <option value='4:00pm'>4:00pm</option>,
                        <option value='6:00pm'>6:00pm</option>,
                        <option value='9:45pm'>9:45pm</option>  
                    </select>
                </div>

                <p>{movie.plot}</p>
                <button onClick={handleSubmit} type="submit">Add To Order</button>
                
            </div>
        </>
    )
}

export default MovieDetails
