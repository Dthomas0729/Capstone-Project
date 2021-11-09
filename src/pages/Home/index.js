import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Welcome from '../../components/Welcome'
import MoviePosterCarousel from '../../components/MoviePosterSlider'



const Home = () => {

    const tmdbUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        axios.get(tmdbUrl).then((res) => {
            setMovies(res.data.results);
        })
    }, [tmdbUrl]);

    return (
        <div>
            <Welcome />
            <MoviePosterCarousel nowPlaying={movies} />
            
            <h1>YOOOO</h1>
        </div>
    )
}

export default Home
