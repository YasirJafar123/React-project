import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Application = () => {
  return (
    <>
    <div className="main">
      <Navbar /> {/* Include Navbar */}
      <Homeimg /> {/* Include Home Section */}
      <section class="home mb-5 pb-0">
        <div class="row mt-10 mb-5">
          <div class="application-back-image">
            <div class="container">
              <div className="row justify-content-center">
              <div className="col-lg-3 "></div>
                <div className="col-lg-8 col-md-12 col-12 mb-5 text-left">
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
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="btnGroupDrop1"
                            >
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="terms abd condition.html"
                                >
                                  Clarendon
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="blog.html"
                                >
                                  Hanover
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="experiance.html"
                                >
                                  Kingston
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  href="delivery.html"
                                >
                                  Manchester
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <button type="button" className="btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-5 ">
                <div class="col-lg-12 col-md-12 col-11 text-center">
                  <h3 class="application-text">YOUR BUSINESS APPLICATION
                    <br />
                    HAS BEEN SUBMITTED
                  </h3>
                </div>
              </div>
              <div className="row mt-5 justify-content-center text-center">
                <div className="col-lg-4 col-sm-5 col-6 ">
                    <span className="qr-text">
                      Application  <span className="qr-text1"># 083</span>
                    </span>
                  </div>
              </div>
              <div class="row justify-content-center mt-5 w-100 mb-5">
                <div class="col-lg-7 col-md-8 col-8 text-center mb-5">
                  <p class="application-para">
                    The Taste Jamaica team has received your application. Please give us 3 business days to
                    review it. Once it is approved you will receive an email notification which will direct
                    you
                    to your profile.
                    <br/>
                    <br/>
                    In the mean time, feel free to search for culinary experiences near to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <br/>
      <br/>
      <Footer /> {/*  include footer */}
      </div>

  </>
  );
};

export default Application;
