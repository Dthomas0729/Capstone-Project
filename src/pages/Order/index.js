import React, { useState, useEffect }from 'react'
import { useNavigate } from 'react-router';
import { useAlert } from 'react-alert';
import * as OrderService from '../../api/OrderService';
import './styles.css';

const Order = (props) => {
    const menuData = JSON.parse(localStorage.getItem('menuOrder'));
    const movieData = JSON.parse(localStorage.getItem('movieOrder'));

    const navigate = useNavigate();
    const alert = useAlert();
    const [order, setOrder] = useState({
        menuItem: menuData.menuItem,
        movie: movieData.movie,
        startTime: movieData.startTime,
    });
    const [tickets, setTickets] = useState(1);
    // const [addOns, setAddOns] = useState();

    useEffect(() => {
        if (props.user) {
            const orderData = {
                userId: props.user._id,
                menuItem: menuData.name,
                movie: movieData.movie,
                startTime: movieData.startTime,
            }
            setOrder(orderData)
        }
    }, [])

    // const handleAddOns = (e) => {
    //     const addOn = e.target.value;
    //     setAddOns(addOn);
    // }

    const handleSubmit = () => {
        console.log(order);

        if (!order.userId) {
            alert.show('Please sign-in to complete your order');
        } else {
            OrderService.create(order)
            alert.show('Order Created!');
        }
        navigate('/Profile')


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
            
            <div className='menuItem-order'>
                <div className='movie-order-img'>
                    <img src={order.menuItem.pictureUrl}></img>
                </div>

                <div className='menuItem-order-details'>
                    <h2>{order.menuItem.name}</h2>
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
            </div>


            <button onClick={handleSubmit} type='submit' className='submit-order'>Submit Order</button>
        </div>
    )
}

export default Order
