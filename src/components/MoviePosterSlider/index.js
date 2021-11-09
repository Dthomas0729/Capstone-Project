import React, { useState }from 'react'

const MoviePosterSlider = (props) => {

    console.log(props.nowPlaying);

    const [nowPlaying, setNowPlaying] = useState(props.nowPlaying)

    return (
        <section> 
           <h1>{nowPlaying}</h1> 
           <div className='movies-links'>

           </div>
           {/* {nowPlaying.map((movie, index) => {
               return (
                   <img />
               )
           })} */}
           <div className="movie-poster">

           </div>
           <div className='movie-details'>

           </div>
        </section>
    )
}

export default MoviePosterSlider
