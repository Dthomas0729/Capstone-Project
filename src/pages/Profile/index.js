import React, { useState }from 'react'

import Auth from '../../components/Auth'
import { getUser } from '../../api/UserService';

const Profile = () => {

    const [user] = useState(getUser);

    if (!user) {
        return (
            <Auth />
        )
    }

    return (
        <div>
            <h1>{user.firstName} Is Logged In.</h1>
        </div>
    )
}

export default Profile
