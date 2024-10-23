import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar"; // Import Navbar component
import Homeimg from "./Homeimg"; // Import Home Section component
import Footer from "./Footer"; //import footer
import Crosel from "./Crosel"; //import crosel
const Index= () => {
    return (
        <>
            <div className='main'>
                <Navbar /> {/* Include Navbar */}
                <Homeimg /> {/* Include Home Section */}
                <section className="home mb-5 pb-0">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-12 col-12 mb-5">
                                <div className='row justify-content-center'>
                                    <div className='col-lg-11 col-md-12'>
                                        <div className="main-custom-titl">
                                            <h2 className="custom-heading">
                                                Search. Discover. Experience
                                            </h2>
                                            <h1 className="custom-title">
                                                TASTE JAMAICA
                                            </h1>
                                            <p className="custom-text">
                                                © Product of Tourism Enhancement Fund
                                            </p>
                                        </div>
                                        <div className="row justify-content-center mt-5">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="search">
                                                    <div className="btn-group " role="group" aria-label="Button group with nested dropdown">
                                                        <input type="text " id="what-text" placeholder="What are you looking for"></input>
                                                        <div className="btn-group" role="group">
                                                            <button id="btnGroupDrop1" type="button"
                                                                className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                Paris
                                                            </button>
                                                            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                                <li><Link className="dropdown-item"
                                                                    to="/Blog2">Clarendon</Link>
                                                                </li>
                                                                <li><Link className="dropdown-item" to="/Business">Hanover</Link></li>
                                                                <li><Link className="dropdown-item" to="/C_policy">Kingston</Link></li>
                                                                <li><Link className="dropdown-item" to="/P-privacy">Manchester</Link></li>
                                                            </ul>
                                                        </div>
                                                        <button type="button" className="btn">
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="custom-para mt-3">Discover Top rated Restaurants, Bars, Street Food
                                                <br />
                                                & Culinary Trails around Jamaica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-5 ">
                                <div className="home-image">
                                    <img src="Images/image3.png" alt="food right img" className="food-side-img img-fluid"></img>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </section>

                <section className="about mt-5">
                    <div className="container">
                        <div className='row'>
                            <div className="ab-sec-hed mt-5">
                                <h2 className="taste">Taste the</h2>
                                <h1 className="best">BEST OF JAMAICA</h1>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6  col-3">
                                        <div className="about-image">
                                            <img src="Images/ab1.png" className="resturent-img img-fluid" alt="Restaurant image not loaded"></img>
                                            <div className="about-text text-center"><span>RESTAURANT</span></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6  col-3">
                                        <div className="about-image">
                                            <img src="Images/ab2.png" className="bar-img img-fluid" alt="Bar image not loaded"></img>
                                            <div className="about-text text-center"> <span>BAR</span></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6  col-3">
                                        <div className="about-image">
                                            <img src="Images/ab3.png" className="street-img img-fluid" alt="Street food image not loaded"></img>
                                            <div className="about-text text-center"><span>STREET FOOD</span></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-3">
                                        <div className="about-image">
                                            <img src="Images/ab4.png" className="cafe-img img-fluid" alt="Cafe image not loaded"></img>
                                            <div className="about-text text-center"><span>CAFE</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="visit pb-5 mt-5">
                    <div className="background-image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="main-hed">
                                        <h2 className="visit-hed">
                                            Visit
                                        </h2>
                                        <h1 className="visit-titl">
                                            DEVON HOUSE
                                        </h1>
                                        <p className="visit-para">
                                            Devon House has so much in store! Designated as a gastronomy centre in 2017, the
                                            Devon
                                            House
                                            grounds are full of amazing eateries offering up everything from classic Jamaican
                                            dishes
                                            to a taste of Italy and France. The Devon House mansion is a beautiful blend of
                                            Caribbean and
                                            Georgian architecture, furnished with an expertly curated collection of Jamaican,
                                            English and French antique pieces and reproductions.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 mt-5">
                                    <div className="visit-image">
                                        <img src="Images/image5.png" className="visit-right-img img-fluid" alt=""></img>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="main-end">
                                        <span className="heading-2">MADE IN JAMAICA PRODUCTS</span>
                                        <button type="button" className="see-btn">See More</button>
                                    </div>
                                </div>
                            </div>
                                <div className="row mt-5">
                                    <div className="col-lg-3 col-md-6 col-6 mt-3">
                                        <div className="visit-end-image">
                                            <img src="Images/image6.png" className="End-image img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6 mt-3">
                                        <div className="visit-end-image">
                                            <img src="Images/image6.png" className="End-image img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6 mt-3">
                                        <div className="visit-end-image">
                                            <img src="Images/image6.png" className="End-image img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6 mt-3">
                                        <div className="visit-end-image">
                                            <img src="Images/image6.png" className="End-image img-fluid" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </section >


                <section className="services mt-5 mb-5">
                    <div className="services-background">
                        <div className="container">
                            <div className="row">
                                <div className="services-head">
                                    <h4 className="services-heading">
                                        Quick Access to
                                    </h4>
                                    <h2 className="services-title">
                                        DELIVERY SERVICES
                                    </h2>

                                </div>
                                <div className="row mb-5">

                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="services-logo">
                                            <img src="Images/log2.png" alt="" className="1st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="services-logo">
                                            <img src="Images/log3.png" alt="" className="2st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="services-logo">
                                            <img src="Images/log4.png" alt="" className="3st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="services-logo">
                                            <img src="Images/log5.png" alt="" className="4st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="tv mt-5 mb-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="tv-head">
                                <h4 className="tv-heading">
                                    Enjoy Culinary action on
                                </h4>
                                <h2 className="tv-title">
                                    TASTE JAMAICA TV
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Crosel /> {/* Include Navbar */}

                </section>


                <section className="cuisin mt-5">
                    <div className="row">
                        <div className="cuisin-background">
                            <div className="container">
                                <div className="row">
                                    <div className="cuisin-head">
                                        <h4 className="cuisin-heading">
                                            Best
                                        </h4>
                                        <h2 className="cuisin-title">
                                            CUISINES
                                        </h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="row justify-content-center mt-5">
                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui1.png" className=" cu1-image img-fluid"
                                                         alt=""></img>
                                                    <div className="cuisin-text text-center">JAMAICAN</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui2.png" className=" cu2-image img-fluid"
                                                         alt=""></img>
                                                    <div className="cuisin-text text-center">CHINESE</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui3.png" className=" cu3-image img-fluid"
                                                         alt=""></img>
                                                    <div className="cuisin-text text-center">JAPANESE</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui4.png" className=" cu4-image img-fluid" alt=""></img>
                                                    <div className="cuisin-text text-center">VEGAN</div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui5.png" className=" cu5-image img-fluid" alt=""></img>
                                                    <div className="cuisin-text text-center">INTERNATIONAL</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui6.png" className=" cu6-image img-fluid" alt=""></img>
                                                    <div className="cuisin-text text-center">INDIAN</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-3 mb-5">
                                                <div className="cuisin-images">
                                                    <img src="Images/cui7.png" className=" cu7-image img-fluid" alt=""></img>
                                                    <div className="cuisin-text text-center">MEXICAN</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cuisin-2nd-head">
                                        <h4 className="cuisin-2nd-heading">
                                            Culinary
                                        </h4>
                                        <h2 className="cuisin-2nd-title">
                                            EXPERIENCES
                                        </h2>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
                                            <div className="cuisin-2nd-image text-center">
                                                <img src="Images/2ndcui1.png" className="2nd-cuisin0img img-fluid" alt=""></img>
                                                <div className="cuisin-2nd-text">Farm to Table</div>
                                                <p className="paragraph-2nd ">
                                                    Experience delightful culinary journey that emphasizes on locally sourced, fresh,
                                                    and often organic ingredients in the food you eat.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-5 text-center">
                                            <div className="cuisin-2nd-image">
                                                <img src="Images/2ndcui2.png" className="2nd-cuisin0img img-fluid" alt=""></img>
                                                <div className="cuisin-2nd-text text-center">Culinary Trails</div>
                                                <p className="paragraph-2nd">
                                                    These trails allow you to explore the island's rich culinary traditions, savor local
                                                    dishes, and learn about the cultural influences that have shaped Jamaican food.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-5 text-center">
                                            <div className="cuisin-2nd-image ">
                                                <img src="Images/2ndcui3.png" className="2nd-cuisin0img img-fluid" alt=""></img>
                                                <div className="cuisin-2nd-text text-center">Blue Mountain Coffee</div>
                                                <p className="paragraph-2nd">
                                                    The Blue Mountain coffee experience in Jamaica is a must for coffee enthusiasts and
                                                    those seeking a unique culinary adventure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="works mt-5">
                    <div className="work-background">
                        <div className="container">
                            <div className="row">
                                <div className="work-head mt-5">
                                    <h4 className="work-heading">
                                        Simple & Easy
                                    </h4>
                                    <h2 className="work-title">
                                        HOW IT WORK
                                    </h2>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-4 col-sm-12 mt-5 text-center">
                                        <div className="main-work mt-5 ">
                                            <div className="work-image ">
                                                <img src="Images/w1.png" className="work1-img img-fluid" alt=""></img>

                                            </div>
                                            <div className="work-text text-center mt-3">Search Locations</div>
                                            <p className="work-para">
                                                You can search for locations near or far. Based on your preference, we will display
                                                a list of Jamaican experiences for you to choose.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12 mt-5  text-center">
                                        <div className="main-work mt-5">
                                            <div className="work-image">
                                                <img src="Images/w2.png" className="work2-img img-fluid" alt=""></img>

                                            </div>
                                            <div className="work-text text-center mt-3">View Location Info</div>
                                            <p className="work-para">
                                                When you have found your heart's desire, you can click to find out more details on
                                                the location.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12 mt-5  text-center">
                                        <div className="main-work mt-5">
                                            <div className="work-image">
                                                <img src="Images/w3.png" className="work3-img img-fluid" alt=""></img>
                                            </div>
                                            <div className="work-text mt-3">Scan QR code for Menu</div>
                                            <p className="work-para ">
                                                Share the details of the restaurant with your friends.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <Footer /> {/*  include footer */}
            </div>
        </>
    );
}

export default Index;
