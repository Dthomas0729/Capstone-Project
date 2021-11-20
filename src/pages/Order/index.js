import React, { useState, useEffect }from 'react'
import { useNavigate } from 'react-router';
import { useAlert } from 'react-alert';
import * as OrderService from '../../api/OrderService';
import './styles.css';

const Order = (props) => {
    const strainData = JSON.parse(localStorage.getItem('strainOrder'));
    const movieData = JSON.parse(localStorage.getItem('movieOrder'));

    const navigate = useNavigate();
    const alert = useAlert();
    const [order, setOrder] = useState({
        strain: strainData.strain,
        gramAmount: strainData.gramAmount,
        movie: movieData.movie,
        startTime: movieData.startTime,
    });
    const [tickets, setTickets] = useState(1);
    const [addOns, setAddOns] = useState();
    const [snacks, setSnacks] = useState();

    useEffect(() => {
        if (props.user) {
            const orderData = {
                userId: props.user._id,
                strain: strainData.strain,
                gramAmount: strainData.gramAmount,
                movie: movieData.movie,
                startTime: movieData.startTime,
            }
            setOrder(orderData)
        }
    }, [])

    const handleSubmit = () => {
        console.log(order);

        if (!order.userId) {
            alert.show('Please sign-in to complete your order');
            navigate('/profile')
        } else {
            OrderService.create(order)
            alert.show('Order Created!');
            navigate('/profile')
        }


    }

    return (
        <div className='order-review'>
            <h1>Order Review</h1>

            <div className='movie-order'>
                <div className='movie-order-details'>
                    <h2>{order.movie.title}</h2>
                    <button>{order.startTime}</button>
                </div>

                <div className='movie-order-img'>
                    <img src={order.movie.poster}></img>
                </div>
            </div>
            
            <div className='strain-order'>
                <div className='movie-order-img'>
                    <img src={order.strain.pictureUrl}></img>
                </div>

                <div className='strain-order-details'>
                    <h2>{order.strain.name}</h2>
                    <button>{order.gramAmount} grams</button>
                </div>
            </div>

            <div className='add-ons-container'>
                <h3>Add-Ons</h3>


                <div className='tickets'>
                    <p className='tickets'>tickets</p>
                    <div>
                        <input
                            onChange={(e) => setTickets(e.target.value)}
                            value={tickets}
                            title="tickets"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className='add-ons'>
                    
                    <div>
                        <select onChange={''} value={''}>
                            <option value='papers'>papers</option>,
                            <option value='blunts'>blunts</option>,
                            <option value='6:00pm'>6:00pm</option>,
                            <option value='9:45pm'>9:45pm</option>  
                        </select>
                    </div>
                </div>
            </div>


            <button onClick={handleSubmit} type='submit' className='submit-order'>Submit Order</button>
        </div>
    )
}

export default Order
