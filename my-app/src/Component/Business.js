import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Business = () => {
    return (
        <>
            <div className="main">
                <Navbar /> {/* Include Navbar */}
                <Homeimg /> {/* Include Home Section */}
                <section className="home mb-5 pb-0" >
                    <div className="container">
                        <div className="row mt-10">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-12  col-12">
                                    <div className="row ">
                                        <div className="col-lg-12 col-md-12 col-12 mt-4">
                                            <div className="search1">
                                                <div className="btn-group " role="group" aria-label="Button group with nested dropdown">
                                                    <input type="text " id="what-text1" placeholder="What are you looking for"></input>
                                                    <div className="btn-group" role="group">
                                                        <button id="btnGroupDrop1" type="button"
                                                            className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            Paris
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                            <li><Link className="dropdown-item"
                                                                to="terms abd condition.html">Clarendon</Link>
                                                            </li>
                                                            <li><Link className="dropdown-item" to="blog.html">Hanover</Link></li>
                                                            <li><Link className="dropdown-item" to="experiance.html">Kingston</Link></li>
                                                            <li><Link className="dropdown-item" to="delivery.html">Manchester</Link></li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" className="btn">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="seach-data mt-3">
                                        <div className="row mt-5">
                                            <div className="col-4 position-relaive">
                                                <img src="Images/bus2.png" className="bus1-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-8">
                                                <div className="col-12">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Restaurant</h4>
                                                        <h4>Cuisine: Jamaican</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston 5</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-4 position-relaive">
                                                <img src="Images/bus3.png" className="bus2-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-8">
                                                <div className="col-12">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Bar</h4>
                                                        <h4>Cuisine: Chinese</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston 5</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-4 position-relaive">
                                                <img src="Images/bus4.png" className="bus3-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-8">
                                                <div className="col-12">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Street Food</h4>
                                                        <h4>Cuisine: Vegan</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston 5</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-4 position-relaive">
                                                <img src="Images/bus5.png" className="bus4-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-8">
                                                <div className="col-12">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Cafe</h4>
                                                        <h4>Cuisine: Jamaican</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston 5</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5 text-center">
                                            <div className="col-12">
                                                <button type="button" className="see-btn">See More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12 mt-5 ">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-12 ">
                                            <div className="busi-right-img">
                                                <img src="Images/busright.png" className="right-busi-image img-fluid" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="row text-center mt-5">
                                            <div className="services-head">
                                                <h4 className="services-heading">
                                                    Quick Access to
                                                </h4>
                                                <h2 className="services-title">
                                                    DELIVERY SERVICES
                                                </h2>

                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="services-logo">
                                                        <img src="Images/log2.png" alt="" className="1st-logo img-fluid"></img>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="services-logo">
                                                        <img src="Images/log3.png" alt="" className="2st-logo img-fluid"></img>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="services-logo">
                                                        <img src="Images/log4.png" alt="" className="3st-logo img-fluid"></img>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-6">
                                                    <div className="services-logo">
                                                        <img src="Images/log5.png" alt="" className="4st-logo img-fluid"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <Footer /> {/*  include footer */}
            </div>
        </>

    );
};

export default Business;