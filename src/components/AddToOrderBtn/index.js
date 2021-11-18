import React from 'react'
import { update } from '../../api/UserService';


const AddToOrderBtn = (props) => {

    return (
        <button onClick={()=> console.log('add to order')}>Add To Order</button>
    )
}

export default AddToOrderBtn
