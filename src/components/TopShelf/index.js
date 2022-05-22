import React from 'react'
import topShelfImg from '../../images/maxresdefault.jpeg';
import Strain from '../Strain';
import StrainData from '../../api/strains.json'

import './styles.css'

const TopShelf = () => {
    // console.log(StrainData)
    return (
        <section className="top-shelf">
            <div style={{ backgroundImage: `url(${topShelfImg})` }} alt="top shelf" className="top-shelf-image"> </div>
            <h1>Top Shelf Menu</h1>
            
            {StrainData.strains.map((strain, index) => {
                        return (
                            <Strain
                                name={strain.name}
                                id={strain.id} 
                                type={strain.type} 
                                flavor={strain.flavor}
                                effect={strain.effect} 
                                thc={strain.thc}
                                price={strain.price}
                                pictureUrl={strain.pictureUrl}
                            />
                        )
                    })}
        </section>
    )
}

export default TopShelf
