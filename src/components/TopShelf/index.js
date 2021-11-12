import React from 'react'
import './styles.css'
import topShelfImg from '../../images/top-shelf.jpg';

const TopShelf = () => {
    return (
        <section className="top-shelf">
            <div style={{ backgroundImage: `url(${topShelfImg})` }} alt="top shelf" className="top-shelf-image"> </div>
            <h1>Top Shelf</h1>

        </section>
    )
}

export default TopShelf
