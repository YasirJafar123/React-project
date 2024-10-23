// src/Component/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="main">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand mx-auto" to="/">
                        <img src="Images/crosl-logo.png" alt="bootstrap" className="img img-fluid" />
                    </Link>
                    <button className="navbar-toggler text-center justify-content-center" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Experience
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Culainry">Culinary Trail</Link></li>
                                    <li><Link className="dropdown-item" to="/Application">Farm to Table</Link></li>
                                    <li><Link className="dropdown-item" to="/Blog">Blue Mountain Coffee</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Product">Food Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Delivery">Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Experiance">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sign_up">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sign">Get listed</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
