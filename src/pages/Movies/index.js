import React, { useState, useEffect } from 'react'
import axios from 'axios';

const { REACT_APP_TMDB_API_KEY } = process.env;
const tmdbUrlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

const Movies = () => {

    const [nowPlaying, setNowPlaying] = useState([]);

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
            <div className="movies-page">
                <h1>Now Playing</h1>

                <div className="movies-list">
                    {nowPlaying.map((movie, index) => {
                        return (
                            <p>{movie.title}</p>
                        )
                    })}
                </div>
            </div>
    )
}

export default Movies
