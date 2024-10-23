import React from "react";
import {Link} from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Delivery = () => {
    return (
        <>
            <div className="main">
                <Navbar/> {/* Include Navbar */}
                <Homeimg/> {/* Include Home Section */}
                <section className="home mb-5 pb-0">
                    <div className="container">
                        <div className="row mt-10">
                            <div className="row mb-5">
                                <div className="col-6 mt-5">
                                    <div className="delvry-img">
                                        <img src="Images/del-pag-img1.png" className="delivery1-img img-fluid"
                                             alt=""></img>
                                    </div>
                                </div>
                                <div className="col-6 mt-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src="Images/delvry1.png" className="delvry1-img img-fluid"
                                                 alt=""></img>
                                        </div>
                                        <div className="col-6">
                                            <img src="Images/delvry2.png" className="delvry2-img img-fluid"
                                                 alt=""></img>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-6">
                                            <img src="Images/delvry3.png" className="delvry3-img img-fluid"
                                                 alt=""></img>
                                        </div>
                                        <div className="col-6">
                                            <img src="Images/delvry4.png" className="delvry4-img img-fluid"
                                                 alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <br/>
                <section className="delvry-hell-city mt-5">
                    <div className="delvry-back-image">
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-lg-4 col-6">
                                    <div className="delvry-head">
                                        <h1>Hellshire in the city</h1>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <img src="Images/flog1.png" alt="" height="45px" width="45px"></img>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <img src="Images/flog3.png" alt="" className="delvry-log1-img img-fluid"></img>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-6 col-12 col-sm-6 mt-4">
                                    <p>“HELLSHIRE IN THE CITY” is Kingston’s top spot for experiencing Jamaica’s most
                                        famous style
                                        of Seafood the “HELLSHIRE STYLE” in the city. We provide authentic Hellshire
                                        style seafood
                                        along with local Jamaican infused meals for pickup & Drlivery .</p>
                                    <div className="row mt-5">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="sub-head">
                                                <h5>Type of Business</h5>
                                                <h4>Restaurant</h4>
                                                <img src="Images/dicon1.png" className="dicon1-img img-fluid"
                                                     alt=""></img>
                                                <br/>
                                                <h5>Phone Number</h5>
                                                <h4>(876) 927 - 2525</h4>
                                                <img src="Images/dicon2.png" className="dicon2-img img-fluid"
                                                     alt=""></img>
                                                <br/>
                                                <h5>Cuisine</h5>
                                                <h4>Jamaican</h4>
                                                <img src="Images/dicon3.png" className="dicon3-img img-fluid"
                                                     alt=""></img>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <h5>Do you Deliver?</h5>
                                                <h4>Yes</h4>
                                                <img src="Images/dicon4.png" className="dicon4-img img-fluid"
                                                     alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="sub-head2">
                                                <h5>Website</h5>
                                                <h4>https://www.currychicken.com</h4>
                                                <img src="Images/dicon5.png" className="dicon5-img img-fluid"
                                                     alt=""></img>
                                                <br/>
                                                <h5>Email Address</h5>
                                                <h4>Email@gmail.com</h4>
                                                <img src="Images/dicon6.png" className="dicon6-img img-fluid"
                                                     alt=""></img>
                                                <br/>
                                                <h5>What do you offer?</h5>
                                                <h4>Breakfast, Desserts, Dinner,
                                                    <br/> Lunch, Natural Juices /
                                                    <br/> Smoothies</h4>
                                                <img src="Images/dicon7.png" className="dicon7-img img-fluid"
                                                     alt=""></img>
                                                <br/>
                                                <h5>Payment Method</h5>
                                                <h4>Cash, Cash on Delivery, Credit
                                                    <br/> Card, Debit Card, Direct
                                                    <br/>Deposit</h4>
                                                <img src="Images/dicon8.png" className="dicon7-img img-fluid"
                                                     alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 col-sm-6">
                                    <div className="row">
                                        <h2 className="location">Location</h2>
                                        <div className="col-lg-12 col-12 col-sm-12 text-center">
                                            <img src="Images/dlvry-loc.png" className="dlvry-loc-img img-fluid"
                                                 alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="delvry-services mt-5">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <div className="services-head">
                                    <h4 className="services-heading">
                                        Quick Access to
                                    </h4>
                                    <h2 className="services-title">
                                        DELIVERY SERVICES
                                    </h2>

                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-3">
                                        <div className="services-logo">
                                            <img src="Images/log2.png" alt="" className="1st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-3">
                                        <div className="services-logo">
                                            <img src="Images/log3.png" alt="" className="2st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-3">
                                        <div className="services-logo">
                                            <img src="Images/log4.png" alt="" className="3st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-3">
                                        <div className="services-logo">
                                            <img src="Images/log5.png" alt="" className="4st-logo img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col-lg-2 col-2">
                                                <h5 className="opening_our">Opening Hours</h5></th>
                                            <th scope="row"></th>
                                            <th scope="row"></th>
                                            <th scope="row"></th>
                                            <th scope="row"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="th_data">
                                            <th scope="row">Monday</th>
                                            <td>11:00 AM-7:00 PM</td>
                                            <th scope="row"></th>
                                            <th scope="row">Friday</th>
                                            <td>11:00 AM-7:00 PM</td>
                                            <br/>
                                        </tr>
                                        <tr className="th_data">
                                            <th scope="row">Tuesday</th>
                                            <td>11:00 AM-7:00 PM</td>
                                            <th scope="row"></th>

                                            <th scope="row">Saturday</th>
                                            <td>11:00 AM-7:00 PM</td>
                                        </tr>
                                        <tr className="th_data">
                                            <th scope="row">Wednesday</th>
                                            <td>11:00 AM-7:00 PM</td>
                                            <th scope="row"></th>
                                            <th scope="row">Sunday</th>
                                            <td s>11:00 AM-7:00 PM</td>
                                        </tr>
                                        <tr className="th_data">
                                            <th scope="row">Thursday</th>
                                            <td>11:00 AM-7:00 PM</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="row justify-content-center">

                                    <div className="dlervy-2nd-main text-center">
                                        <div className="delvry-2nd-head text-center">
                                            <span className="qr-texts">
                                                Scan to see our Menu or</span>
                                            <label type="button" className="click-btn">click here</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center text-center">
                                    <div className="col-lg-9 col-8">
                                        <div className="exper-logo text-center">
                                            <img src="Images/qr-img.png" className="qr-image img-fluid mt-5"
                                                 alt=""></img>
                                            <h6>Share our Menu with your friends</h6>
                                            <div className="delvry-qr-logo">
                                                <div className="row text-center justify-content-center mt-5">
                                                    <div className="col-lg-2 col-3 mt-5">
                                                        <img src="Images/flog5.png" className="flog-5-img img-fluid"
                                                             alt=""></img>
                                                    </div>
                                                    <div className="col-lg-2 col-3 mt-5">
                                                        <img src="Images/flog1.png" className="flog-1-img img-fluid"
                                                             alt=""></img>
                                                    </div>
                                                    <div className="col-lg-2 col-3 mt-5">
                                                        <img src="Images/flog2.png" className="flog-5-img img-fluid"
                                                             alt=""></img>
                                                    </div>
                                                    <div className="col-lg-2 col-3 mt-5">
                                                        <img src="Images/flog4.png" className="flog-5-img img-fluid"
                                                             alt=""></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-end mb-5 mt-5">
                                <div className="col-lg-6 col-12">
                                    <div className="row justify-content-end text-center">
                                        <div className="col-lg-6 col-md-6 col-12 mt-3">
                                                    <button type="button" className="see-btn3">Edit</button>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12 mt-3">
                                                    <button type="button" className="see-btn3">Edit</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                    </div>
                </section>
                <br/>
                <Footer/> {/*  include footer */}
            </div>

        </>

    );
};

export default Delivery;