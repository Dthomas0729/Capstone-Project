import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Welcome from '../../components/Welcome'
import MoviePosterSlider from '../../components/MoviePosterSlider'



const Home = () => {

    const tmdbUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(tmdbUrl).then((res) => {
            const newMovies = [];

            res.data.results.forEach(movie => {
                newMovies.push({
                    key: {movie},
                    title: movie.title,
                    tmbdId: movie.id,
                    plot: movie.overview,
                    genreIds: movie.genre_ids,
                    popularity: movie.popularity,
                    poster: movie.poster_path,
                    releaseDate: movie.release_date,
                })
            });

            setMovies(newMovies);
        })
    }, [tmdbUrl]);

    return (
        <div>
            <Welcome />
            <MoviePosterSlider slides={movies} />
            
            <h1>YOOOO</h1>
        </div>
    )
}

export default Home
