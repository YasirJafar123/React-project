
import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Sign_up = () => {
    return (
        <>
            <div className="main">
            <Navbar /> {/* Include Navbar */}
            <Homeimg /> {/* Include Home Section */}
            <section className="home mb-5 pb-0" >
                <div className="signup-background-img mt-5 mb-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12">
                                <div className="main-end  text-center">
                                    <span className="pro-title">SIGN UP</span>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-8 col-10">
                                    <form>
                                        <label className="Business">User
                                            Profile</label>
                                        <select className="form-select-b form-select  mb-3" aria-label=".form-select-s">
                                            <option selected>Business</option>
                                            <option value="1">Software House</option>
                                            <option value="2">Rice Miles</option>
                                            <option value="3">Bank</option>
                                        </select>
                                        <div className="form-group">
                                            <label className="first-name">First Name</label>
                                            <input type="name" className="form-control mb-3" id="first-name"
                                                aria-describedby="emailHelp" placeholder=""></input>

                                        </div>
                                        <div className="form-group">
                                            <label for="last-name">Last Name</label>
                                            <input type="name" className="form-control mb-3" id="last-name" placeholder=""></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email Address</label>
                                            <input type="email" className="form-control mb-3" id="email"
                                                aria-describedby="emailHelp" placeholder=""></input>
                                        </div>
                                        <div className="form-group">
                                            <label for="Password">Password</label>
                                            <input type="Password" className="form-control mb-3" id="Password" placeholder=""></input>
                                        </div>


                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="Check"></input>
                                            <label className="form-check-label mb-3" for="flexCheck">
                                                You must accept <span className="green-colr">Terms and
                                                    Conditions</span> before registering
                                            </label>
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="Check"></input>
                                            <label className="form-check-label mb-5" for="flexCheck">
                                                Subscribe to our Newsletter
                                            </label>
                                        </div>
                                        <div className="row  mb-5 text-center">
                                            <button type="button" className="see-btn2">Sign Up</button>
                                        </div>
                                        <div className="row text-center">
                                            <div className="singnup-text">
                                                <span className="qr-text">
                                                    You have an account?
                                                </span>
                                                <label type="button" className="see-btn5">
                                                    Login
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sign-captcha mt-5">
                                            <img src="Images/signup-capcha.png" className="sign-capcha-img img-fluid" alt=""></img>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <br />
            <br />
            <br />
            <Footer /> {/*  include footer */}
            </div>


        </>

    );
};
export default Sign_up;