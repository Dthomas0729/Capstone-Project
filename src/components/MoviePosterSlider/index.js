import React, { useState }from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './styles.css'

const MoviePosterSlider = (props) => {

    console.log(props.slides);

    const [current, setCurrent] = useState(0);
    const length = props.slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (

        <section className='slider'> 
           <FaChevronLeft className='left-arrow' onClick={prevSlide} />
           <FaChevronRight className='right-arrow' onClick={nextSlide} />
           
            {props.slides.map((movie, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                
                                {index === current && (
                                    <div className='image-overlay'>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} className='image'></img>
                                    </div>
                                )}
                                
                                <div className='movie-details'>

                                </div>
                            </div>
                        )
                    })}

        </section>
    )
}

export default MoviePosterSlider
