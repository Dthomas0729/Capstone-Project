import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAlert } from 'react-alert';
import Data from '../../api/strains.json'
import TopShelf from '../../components/TopShelf';

import './styles.css';

const strains = Data.strains;

const fetchData = (id) => {
    const strain = strains.find(strain => strain.id == id);
    console.log(strain);
    return strain
}

const StrainDetails = () => {
    const alert = useAlert();
    const navigate = useNavigate();
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
        alert.show(`${amount} grams of ${strain.name} has been added to your order`)

        if (localStorage.getItem('movieOrder')) {
            navigate('/order');
        } else {
            navigate('/movies');
        }
    }

    return (
        <>
            <div className="strain-details">
                <h1>{strain.name}</h1>
                <h2>{strain.type}  |  thc: {strain.thc}</h2>
                <img src={strain.pictureUrl} alt={strain.name}></img>

                <div className="details-wrapper">
                    <h3>flavor: {strain.flavor}</h3>
                    <h3>effect: {strain.effect}</h3>
                </div>

                <h1>How Much?</h1>
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    title="amount"
                    placeholder="0"
                />
                
                <button onClick={handleSubmit} type="submit">Add To Order</button>      
            </div>
            <TopShelf />
        </>
    )
}

export default StrainDetails
