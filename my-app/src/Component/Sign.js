
import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Sign = () => {
    return (
        <>
            <div className="main">
                <Navbar /> {/* Include Navbar */}
                <Homeimg /> {/* Include Home Section */}
                <section className="home mb-5 pb-0" >
                    <div className="signup-background-img mt-5">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12">
                                    <div className="main-end  text-center">
                                        <span className="pro-title">LOG IN</span>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-5">
                                    <div className="col-lg-4 col-md-8 col-10">
                                        <div className="row mt-5 justify-content-center mb-3">
                                            <div className="col-3">
                                                <div className="delvry-qr-logo">
                                                    <img src="Images/flog1.png" className="flog-1-img img-fluid" alt="" height="40px"
                                                        width="40px"></img>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="delvry-qr-logo">
                                                    <img src="Images/flog2.png" className="flog-1-img img-fluid" alt="" height="40px"
                                                        width="40px"></img>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="delvry-qr-logo">
                                                    <img src="Images/flog4.png" className="flog-1-img img-fluid" alt="" height="40px"
                                                        width="40px"></img>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mt-3">
                                                <hr className="flex-grow-1"></hr>
                                                <span className="mx-1">OR</span>
                                                <hr className="flex-grow-1"></hr>
                                            </div>

                                        </div>

                                        <form>
                                            <div className="form-group">
                                                <label for="email">Email
                                                    Address</label>
                                                <input type=" email" className="form-control mb-3" id="email"
                                                    aria-describedby="emailHelp" placeholder=""></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="Password">Password</label>
                                                <input type="password" className="form-control mb-3" id="Password" placeholder=""></input>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group form-check">
                                                        <input type="checkbox" className="form-check-input" id="Check"
                                                        ></input>
                                                        <label className="form-check-label" for="flexCheck">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label type="button" className="see-btn4">
                                                        Forgot Password?
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-5 mb-5 text-center">
                                                <button type="button" className="see-btn2">LOGIN</button>
                                            </div>
                                            <div className="row text-center ">
                                                <div className="singnup-text">
                                                    <span className="qr-text">
                                                        New to Taste Jamaica?
                                                    </span>
                                                    <label type="button" className="see-btn5">
                                                        Sign up
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
                </section>
                <br />
                <br />
                <br />
                <Footer /> {/*  include footer */}
            </div>

        </>

    );
};
export default Sign;