import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Data from '../../api/strains.json'

import './styles.css';

const strains = Data.strains;

const fetchData = (id) => {
    const strain = strains.find(strain => strain.id == id);
    console.log(strain);
    return strain
}

const StrainDetails = () => {
    const { id } = useParams();

    const [strain] = useState(fetchData(id));
    const [amount, setAmount] = useState();

    const handleSubmit = () => {
        const orderData = {
            strain: strain,
            gramAmount: amount,
        }
        
        console.log(orderData);
        localStorage.setItem('strainOrder', JSON.stringify(orderData))
    }

    return (
        <div className="strain-details">
            <h1>{strain.name}</h1>
            <h2>{strain.type}  |  thc: {strain.thc}</h2>
            <img src={strain.pictureUrl} alt={strain.name}></img>

            <h3>flavor: {strain.flavor}</h3>
            <h3>effect: {strain.effect}</h3>

            <h1>How Much?</h1>
            <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                title="amount"
                placeholder="grams"
            />
            
            <button onClick={handleSubmit} type="submit">Submit</button>
            
        </div>
    )
}

export default StrainDetails
