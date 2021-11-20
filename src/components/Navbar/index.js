import React, {useState} from "react";
import { Route, Link, Routes } from "react-router-dom";
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import MediaQuery from 'react-responsive';

import { getUser } from '../../api/UserService';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Cannabis from '../../pages/Cannabis';
import Snacks from '../../pages/Snacks';
import Order from '../../pages/Order';
import Theater from '../../pages/Theater';
import Profile from '../../pages/Profile';
import SignUpForm from '../SignUpForm';
import Logout from '../Logout'

import "./styles.css";
import MovieDetails from "../../pages/MovieDetails";
import StrainDetails from "../../pages/StrainDetails";

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [user] = useState(getUser);

    const showSidebar = () => setSidebar(!sidebar) //toggles between True & False

    return (
        <>

            <nav>
                <div className='nav-brand'>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
                        <h1> Dankees </h1>
                    </Link>
                </div>

                <div className='profile'>

                    <Link to='/profile'>
                        <FaUserCircle fontSize='28px'/>
                    </Link>
                    <MediaQuery minWidth={950}>
                    <Link to='/profile'>
                        {user ? (<h2>{user.firstName}</h2>) : ( <p>Sign In</p> )}
                    </Link>
                    </MediaQuery>

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
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/movies'>
                            Movies
                        </Link>
                        <Link to='/cannabis'>
                            Cannabis
                        </Link>
                        <Link to='/profile'>
                            Profile
                        </Link>
                        <Link to='/order'>
                            My Order
                        </Link>
                    </div>
            </nav>

                <MediaQuery minWidth={950}>
                    <ul className="nav-links">
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/movies'>
                            Movies
                        </Link>
                        <Link to='/cannabis'>
                            Cannabis
                        </Link>
                        <Link to='/profile'>
                            Profile
                        </Link>
                        <Link to='/order'>
                            My Order
                        </Link>
                    </ul>
                </MediaQuery>
            </nav>
                
                <Routes>
                    <Route 
                        exact 
                        path="/"
                        element={<Home user={user} />} 
                    />
                    <Route
                        path="/movies"
                        element={<Movies user={user} />} 
                    />
                    <Route
                        path="/movies/:id"
                        element={<MovieDetails user={user} />} 
                    />
                    <Route
                        path="/cannabis"
                        element={<Cannabis user={user} />}
                    />
                    <Route
                        path="/cannabis/:id"
                        element={<StrainDetails user={user} />}
                    />
                    <Route
                        path="/snacks"
                        element={<Snacks user={user} />}
                    />
                    <Route
                        path="/theater"
                        element={<Theater user={user} />}
                    />
                    <Route
                        path="/order"
                        element={<Order user={user} />}
                    />
                    <Route
                        path="/profile"
                        element={<Profile user={user} />}
                    /> 
                    <Route
                        path="/logout"
                        element={<Logout />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUpForm />}
                    />

                </Routes>   
        </>
    )
}

export default Navbar