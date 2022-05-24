import React from 'react'
import topShelfImg from '../../images/maxresdefault.jpeg';
import MenuItem from '../MenuItem';
import Data from '../../api/menu.json';
import './styles.css'

const TopShelf = () => {
    // console.log(Menu)
    return (
        <section className="top-shelf">
            <div style={{ backgroundImage: `url(${topShelfImg})` }} alt="top shelf" className="top-shelf-image"> </div>
            <h1>Top Shelf Menu</h1>
            
            {Data.menu.map((menuItem, index) => {
                        return (
                            <MenuItem
                                key={menuItem.id}
                                name={menuItem.name}
                                id={menuItem.id} 
                                type={menuItem.type} 
                                flavor={menuItem.flavor}
                                effect={menuItem.effect} 
                                thc={menuItem.thc}
                                price={menuItem.price}
                                pictureUrl={menuItem.pictureUrl}
                            />
                        )
                    })}
        </section>
    )
}

export default TopShelf
