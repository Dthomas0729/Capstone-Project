import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Welcome from '../../components/Welcome';
import MoviesSlider from '../../components/MoviesSlider';
import TopShelf from '../../components/TopShelf';
import Footer from '../../components/Footer';

const { REACT_APP_TMDB_API_KEY } = process.env;
const tmdbUrlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
// const tmdbUrlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

const Home = () => {

    const [nowPlaying, setNowPlaying] = useState([]);
    // const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        try {
            axios.get(tmdbUrlNowPlaying).then((res) => {
                const nowPlayingMovies = [];
    
                res.data.results.forEach(movie => {
                    nowPlayingMovies.push({
                        key: movie.id,
                        title: movie.title,
                        tmbdId: movie.id,
                        plot: movie.overview,
                        genreIds: movie.genre_ids,
                        popularity: movie.popularity,
                        poster: movie.poster_path,
                        releaseDate: movie.release_date,
                    })
                });
                setNowPlaying(nowPlayingMovies);
            })
        }
        catch(err) {
            console.log(err)
        }
    }, []);

    return (
        <div>
            <Welcome />
            <MoviesSlider nowPlaying={nowPlaying} />
            <TopShelf />
        </div>
    )
}

export default Home
