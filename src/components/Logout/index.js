import React from 'react'
import { useNavigate } from 'react-router';

const Logout = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        localStorage.removeItem('token');
        navigate('/profile');
    }

    return (
        <div>
            <h1>Are you sure you want to log out?</h1>
            <button onClick={handleSubmit}>Log Out</button>
            
        </div>
    )
}

export default Logout
