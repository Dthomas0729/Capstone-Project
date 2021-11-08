import React, {useState} from "react";
import { Route, Link, Routes  } from "react-router-dom";
import { FaUserCircle, FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import MediaQuery from 'react-responsive'


import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Cannabis from '../../pages/Cannabis';
import Snacks from '../../pages/Snacks';
import Order from '../../pages/Order';
import Theater from '../../pages/Theater';
import Profile from '../../pages/Profile';

import "./styles.css";

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar) //toggles between True & False

    return (
        <>

            <nav>
                <div className='nav-brand'>
                    <Link style={{textDecoration: 'none', color: 'black'}}to='/'>
                        <h1> Smokers Cinemas </h1>
                    </Link>
                </div>

                <div className='profile-icon'>
                    <Link to='/profile'>
                        <FaUserCircle fontSize='28px'/>
                    </Link>
                </div>
                    
                <MediaQuery maxWidth={949}>
                    <div className='menu-bars'>
                        <Link to="#">
                            <FaBars fontSize={32} onClick={showSidebar}/>
                        </Link>
                    </div>
                </MediaQuery>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <div className='nav-menu-items' onClick={showSidebar}>
                        <div className='navbar-toggle'>
                            <Link to="#">
                                <AiOutlineClose />
                            </Link>
                        </div>
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

                <MediaQuery minWidth={950}>
                    <ul className="nav-links">
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
                    </ul>
                </MediaQuery>
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