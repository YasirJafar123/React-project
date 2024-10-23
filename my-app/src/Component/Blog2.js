import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Blog2 = () => {
    return (
        <>
            <div className="main">
                <Navbar /> {/* Include Navbar */}
                <Homeimg /> {/* Include Home Section */}

                <section className="home mb-0 pb-0">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 col-12 text-center">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-12">
                                        <div className="blog2-img">
                                            <img src="Images/blog-1.png" className="blog-1st-img img-fluid" alt=""></img>
                                            <h6 className="blog2-text mt-5">
                                                Scotch Boyz (4) 5-oz Authentic Jamaican
                                                <br />
                                                Pepper Sauces on QVC
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-10 mt-5 mb-5">
                                        <p className="blog2-para">

                                            With this favourable reputation in mind, and to build on the great dynamism of our
                                            country's culinary offerings through our chefs and restaurants, the Ministry of
                                            Tourism
                                            has sought to improve the gastronomical experience for our visitors. It is for this
                                            reason that the Tourism Linkages Network (TLN), a division of the Tourism
                                            Enhancement
                                            Fund (TEF), established Taste Jamaica through the Gastronomy Network, led by our
                                            irrepressibly forward-thinking Chairperson Nicola Madden-Greig and her team.
                                            <br />
                                            <br />
                                            Taste Jamaica is eager to meet this challenge and is ready to embrace the changes
                                            that
                                            come with it. We are, therefore, immensely proud of this initiative, which will make
                                            it
                                            easier for users to learn more about our island’s culinary offerings.

                                        </p>
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

export default Blog2;