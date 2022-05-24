import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAlert } from 'react-alert';
import Data from '../../api/menu.json'
import TopShelf from '../../components/TopShelf';

import './styles.css';

const menu = Data.menu;

const fetchData = (id) => {
    const MenuItem = menu.find(MenuItem => MenuItem.id == id);
    console.log(id);
    console.log(MenuItem);
    return MenuItem
}

const MenuItemDetails = () => {
    const alert = useAlert();
    const navigate = useNavigate();
    const { id } = useParams();

    const [menuItem] = useState(fetchData(id));
    const [amount, setAmount] = useState();

    const handleSubmit = () => {
        const orderData = {
            menuItem: menuItem,
        }
        
        console.log(orderData);
        localStorage.setItem('menuOrder', JSON.stringify(orderData))
        alert.show(`${menuItem.name} has been added to your order`)

        if (localStorage.getItem('movieOrder')) {
            navigate('/Order');
        } else {
            navigate('/Movies');
        }
    }

    return (
        <>
            <section className="menuItem-container">
                <div className="menuItem-details">
                    <h1>{menuItem.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi</p>
                </div>
                
                <div className="menuItem-img">
                    <img src={menuItem.pictureUrl} alt={menuItem.name}></img>

                </div>
               
                
                <button onClick={handleSubmit} type="submit">Add To Order</button>      
            </section>
            <TopShelf />
        </>
    )
}

export default MenuItemDetails
