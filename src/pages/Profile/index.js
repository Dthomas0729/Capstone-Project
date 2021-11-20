import React, { useState }from 'react'

import Auth from '../../components/Auth'
import { getUser } from '../../api/UserService';
import './styles.css';

const Profile = () => {

    // const navigate = useNavigate();
    const [user] = useState(getUser);

    if (!user) {
        return (
            <Auth />
        )
    }

    return (
        <div className="profile-page">
            <h1>{user.firstName} Is Logged In.</h1>
            
            <a href='/logout'>Log out</a>
        </div>
    )
}

export default Profile
