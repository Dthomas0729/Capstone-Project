import React, {useState} from "react";
import { Route, Link, Routes } from "react-router-dom";
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import MediaQuery from 'react-responsive';

import { getUser } from '../../api/UserService';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Menu from '../../pages/Menu';
import Order from '../../pages/Order';
import Profile from '../../pages/Profile';
import SignUpForm from '../SignUpForm';
import Logout from '../Logout'
import MovieDetails from "../../pages/MovieDetails";
import MenuItem from '../../pages/MenuItemDetails';

import "./styles.css";


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [user] = useState(getUser);

    const showSidebar = () => setSidebar(!sidebar) //toggles between True & False

    return (
        <>

            <nav id='main-nav'>
                <div className='nav-brand'>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
                        <h1> Dankees </h1>
                    </Link>
                </div>

                <div className='profile'>

                    <Link to='/Profile'>
                        <FaUserCircle fontSize='28px'/>
                    </Link>
                    <MediaQuery minWidth={950}>
                    <Link to='/Profile'>
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
                        <Link to='/Movies'>
                            Movies
                        </Link>
                        <Link to='/Menu'>
                            Menu
                        </Link>
                        <Link to='/Profile'>
                            Profile
                        </Link>
                        <Link to='/Order'>
                            My Order
                        </Link>
                    </div>
                </nav>

                <MediaQuery minWidth={950}>
                    <ul className="nav-links">
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/Movies'>
                            Movies
                        </Link>
                        <Link to='/Menu'>
                            Menu
                        </Link>
                        <Link to='/Profile'>
                            Profile
                        </Link>
                        <Link to='/Order'>
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
                        path="/Movies"
                        element={<Movies user={user} />} 
                    />
                    <Route
                        path="/Movies/:id"
                        element={<MovieDetails user={user} />} 
                    />
                    <Route
                        path="/Menu"
                        element={<Menu user={user} />}
                    />
                    <Route
                        path="/Menu/:id"
                        element={<MenuItem user={user} />}
                    />
                    <Route
                        path="/Order"
                        element={<Order user={user} />}
                    />
                    <Route
                        path="/Profile"
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