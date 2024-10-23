import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Blog = () => {
    return (
        <>
            <div className="main">
                <Navbar /> {/* Include Navbar */}
                <Homeimg /> {/* Include Home Section */}
                <section className="home mb-0 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="blog-heading ms-5">
                                <h2>Checkout Our</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-3 col-12 ms-5">
                                    <h2 className="blog-title">BLOG UPDATES</h2>
                                </div>
                                <div className="col-lg-3 col-md-5 col-12">
                                    <div className="nav-item dropdown blog-dropdown">
                                        <Link className="nav-link dropdown-toggle " to="/Term" role="button" data-bs-toggle="dropdown blog-dropdown1"
                                            aria-expanded="false" >
                                            Select Category
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item blog-item" to="/Term">Application</Link></li>
                                            <li><Link className="dropdown-item blog-item" to="/Term">Blog2</Link></li>
                                            <li><Link className="dropdown-item blog-item" to="/Term">cookies_policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="nav-item dropdown blog-dropdown">

                                        <Link className="nav-link dropdown-toggle " to="/Term" role="button" data-bs-toggle="dropdown blog-dropdown1"
                                            aria-expanded="false">
                                            Recent
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Term">Clarendon</Link></li>
                                            <li><Link className="dropdown-item " to="/Term">Hanover</Link></li>
                                            <li><Link className="dropdown-item" to="/Term">Kingston</Link></li>
                                            <li><Link className="dropdown-item" to="/Term">Manchester</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-lg-4 col-md-4">
                                    <img src="Images/blog-1.png" className="blog-1st-img img-fluid" alt=""></img>
                                    <p className="blog-para">Scotch Boyz (4)
                                        <br />5-oz Authentic Jamaican Pepper
                                        <br /> Sauces on QVC
                                    </p>
                                    <h6 className="blog-date">03-August-2021</h6>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <img src="Images/blog2.png" className="blog-2st-img img-fluid" alt=""></img>
                                    <p className="blog-para">J’can-Canadian chef opens
                                        <br />culinary doors in Toronto
                                    </p>
                                    <h6 className="blog-date">03-August-2021</h6>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <img src="Images/blog3.png" className="blog-3st-img img-fluid" alt=""></img>
                                    <p className="blog-para">Jamaican makes success of
                                        <br />‘home restaurant’ in Mexico
                                    </p>
                                    <h6 className="blog-date">03-August-2021</h6>
                                </div>

                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-lg-4 col-md-4">
                                    <img src="Images/blog-1.png" className="blog-1st-img img-fluid" alt=""></img>
                                    <p className="blog-para">Scotch Boyz (4)
                                        <br />5-oz Authentic Jamaican Pepper
                                        <br /> Sauces on QVC
                                    </p>
                                    <h6 className="blog-date">03-August-2021</h6>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <img src="Images/blog2.png" className="blog-2st-img img-fluid" alt=""></img>
                                    <p className="blog-para">J’can-Canadian chef opens
                                        <br />culinary doors in Toronto
                                    </p>
                                    <h6 className="blog-date">03-August-2021</h6>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <img src="Images/blog3.png" className="blog-3st-img img-fluid" alt=""></img>
                                    <p className="blog-para">Jamaican makes success of
                                        <br />‘home restaurant’ in Mexico
                                    </p>
                                    <h6 className="blog-date">03-August-2021</h6>
                                </div>

                            </div>
                            <div className="row mt-5 mb-5 text-center">
                                <div className="col-12 mb-5">
                                    <button type="button" className="see-btn1">See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <Footer /> {/*  include footer */}
            </div>
        </>
    );
};

export default Blog;