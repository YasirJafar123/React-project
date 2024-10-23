import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Experiance = () => {
    return (
        <>
            <div className="main">
            <Navbar /> {/* Include Navbar */}
            <Homeimg /> {/* Include Home Section */}
            <section className="home mb-5 pb-0">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-lg-3 col-md-8 col-10  ">
                                <div className="row mt-5">
                                    <div className="exper-left-img">
                                        <div className="col-lg-12 text-center">
                                            <div className="exper-logo">
                                                <img src="Images/exper-logo.png" className="exper-logo-img img-fluid mt-5" alt=""></img>
                                                <h4 className="exper-left-heading">First name Last name</h4>
                                                <h6 className="exper-left-sub_heading">email@mail.com</h6>
                                                <div className="row text-left">
                                                    <div className="col-12 text-left">
                                                        <button type="Edit" className="form-control mt-3" id="Edit">
                                                            Edit your Business Listing
                                                        </button>
                                                        <button type="Delete" className="form-control" id="Delete">
                                                            Delete Profile

                                                        </button>
                                                        <button type="Logout" className="form-control" id="Logout">
                                                           Log out

                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-12 text-left mt-5">
                                <div className="main-custom-titl1">
                                    <h2 className="custom-heading">
                                        Search. Discover. Experience
                                    </h2>
                                    <h1 className="custom-title1">TASTE JAMAICA</h1>
                                    <p className="custom-text">
                                        © Product of Tourism Enhancement Fund
                                    </p>
                                </div>
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="search">
                                            <div
                                                className="btn-group "
                                                role="group"
                                                aria-label="Button group with nested dropdown"
                                            >
                                                <input
                                                    type="text "
                                                    id="what-text"
                                                    placeholder="What are you looking for"
                                                ></input>
                                                <div className="btn-group" role="group">
                                                    <button
                                                        id="btnGroupDrop1"
                                                        type="button"
                                                        className="btn btn-primary dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Paris
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                        <li><Link className="dropdown-item"
                                                                  to="/Blog2">Clarendon</Link>
                                                        </li>
                                                        <li><Link className="dropdown-item"
                                                                  to="/Business">Hanover</Link></li>
                                                        <li><Link className="dropdown-item"
                                                                  to="/C_policy">Kingston</Link></li>
                                                        <li><Link className="dropdown-item"
                                                                  to="/P-privacy">Manchester</Link></li>
                                                    </ul>
                                                </div>
                                                <button type="button" className="btn">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row justify-content-center mb-5 mt-5">
                                    <div className="col-lg-12 col-sm-8 col-10">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-4 col-5 ">
                                                <img src="Images/bus2.png" className="bus1-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-lg-8 col-7">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Restaurant</h4>
                                                        <h4>Cuisine: Jamaican</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston</h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5 justify-content-center">
                                            <div className="col-lg-4 col-5 ">
                                                <img src="Images/bus3.png" className="bus1-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-lg-8 col-7">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Restaurant</h4>
                                                        <h4>Cuisine: Jamaican</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston</h4>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="row mt-5 ">
                                            <div className="col-lg-4 col-5 ">
                                                <img src="Images/bus4.png" className="bus2-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-lg-8 col-7 ">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Bar</h4>
                                                        <h4>Cuisine: Chinese</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston</h4>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5 ">
                                            <div className="col-lg-4 col-5  ">
                                                <img src="Images/bus5.png" className="bus3-image img-fluid" alt=""></img>
                                            </div>
                                            <div className="col-lg-8 col-7 ">
                                                    <div className="bus1-data">
                                                        <h2>Hellshire in the city</h2>
                                                        <h4>Street Food</h4>
                                                        <h4>Cuisine: Vegan</h4>
                                                        <h4>Address: 1 Easton Ave, Kingston</h4>
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
            <br/>
            <Footer /> {/*  include footer */}
            </div>

        </>

    );
};
export default Experiance;