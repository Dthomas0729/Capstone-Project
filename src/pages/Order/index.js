import React, { useState, useEffect }from 'react'

const Order = (props) => {
    const strainData = JSON.parse(localStorage.getItem('strainOrder'));
    const movieData = JSON.parse(localStorage.getItem('movieOrder'));

    const [order, setOrder] = useState({
        userId: props.user._id,
        strain: strainData.strain,
        gramAmount: strainData.gramAmount,
        movie: movieData.movie,
        startTime: movieData.startTime,
    });
    const [tickets, setTickets] = useState();
    const [addOns, setAddOns] = useState();
    const [snacks, setSnacks] = useState();

    console.log(order);
    return (
        <div>
            <h1>Order Review</h1>

            <div className='movie-review-container'>
                <h3>Movie</h3>
                <div className='movie-review'>
                    <h2>{order.movie.title}</h2>
                    <button>{order.startTime}</button>
                </div>
                <div className='tickets'>
                    <h3>tickets</h3>
                    <input type='Number'></input>
                </div>
            </div>
            
            <div className='strain-review-container'>
                <h3>Cannabis Shop</h3>
                <div className='strain-review'>
                    <h2>{order.strain.name}</h2>
                    <button>{order.gramAmount} grams</button>
                </div>
                <div className='add-ons-container'>
                    <h3>Add-Ons</h3>

                    <div className='add-ons'>
                        <h3>joint pre-rolled</h3>
                        <button>3</button>

                    </div>
                </div>
            </div>

            <button type='submit' className='submit-order'>Submit Order</button>
        </div>
    )
}

export default Order
