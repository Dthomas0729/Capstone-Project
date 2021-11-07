import React from "react";
import { Route, Link, Routes  } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Cannabis from '../../pages/Cannabis';
import Snacks from '../../pages/Snacks';
import Order from '../../pages/Order';
import Theater from '../../pages/Theater';
import Profile from '../../pages/Profile';

import "./styles.css";

const Navbar = () => {

    return (
        <>
            <nav>
                <div className='nav-brand'>
                    <Link style={{textDecoration: 'none', color: 'black'}}to='/'>
                        <h1> Smokers Cinemas </h1>
                    </Link>

                    <Link to='/profile'>
                        <AccountCircleIcon fontSize='large'/>
                    </Link>
                    
                </div>

                <div className="nav-links">
                    <Link to='/movies'>
                        Movies
                    </Link>
                    <Link to='/cannabis'>
                        Cannabis
                    </Link>
                    <Link to='/snacks'>
                        Snacks
                    </Link>
                    <Link to='/theater'>
                        Theater
                    </Link>
                    <Link to='/orders'>
                        Order
                    </Link>
                    
                </div>
            </nav>
                
                <Routes>
                    <Route 
                        exact 
                        path="/"
                        element={<Home />} 
                    />
                    <Route
                        path="/movies"
                        element={<Movies />} 
                    />
                    <Route
                        path="/cannabis"
                        element={<Cannabis />}
                    />
                    <Route
                        path="/snacks"
                        element={<Snacks />}
                    />
                    <Route
                        path="/theater"
                        element={<Theater />}
                    />
                    <Route
                        path="/order"
                        element={<Order />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile />}
                    />
                    {/* <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/logout"
                        element={<Logout />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp />}
                    /> */}

                </Routes>   
        </>
    )
}

export default Navbar