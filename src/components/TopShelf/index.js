import React from 'react'
import topShelfImg from '../../images/top-shelf.jpg';
import Strain from '../Strain';

import './styles.css'

const TopShelf = () => {
    return (
        <section className="top-shelf">
            <div style={{ backgroundImage: `url(${topShelfImg})` }} alt="top shelf" className="top-shelf-image"> </div>
            <h1>Top Shelf</h1>

            <Strain />
        </section>
    )
}

export default TopShelf
