import React, { useState }from 'react'

const Order = (props) => {

    const [currentOrder, setCurrentOrder] = useState();

    console.log('current order: ', currentOrder);
    return (
        <div>
            <h1>Order PAGE</h1>
        </div>
    )
}

export default Order
