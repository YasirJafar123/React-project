
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="main">

                <section className="fot mt-5">
                    <div className="fot-background">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12 mt-5">
                                    <div className="fot-head">
                                        <h2 className="fot-heading">
                                            Affiliates
                                        </h2>
                                        <p className="fot-para">
                                            Tourism Enhancement Fund Tourism Linkages Network Top Events Jamaica Agri-linkages
                                            Jamaica Tourist Board
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 mt-5">
                                    <div className="fot-head">
                                        <h2 className="fot-heading">
                                            Terms of Use
                                        </h2>
                                        <p className="fot-para">
                                            Privacy Policy
                                            <br />
                                            Terms and conditions
                                            <br />
                                            Cookie Policy
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 mt-5">
                                    <div className="fot-head">
                                        <h2 className="fot-heading">
                                            Follow Us
                                        </h2>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 col-4">
                                                <div className="fot-para">
                                                    <img src="Images/flog1.png" className='img-fluid' alt="" height="40px" width="40px"></img>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-4">
                                                <div className="fot-para">
                                                    <img src="Images/flog2.png" className='img-fluid' alt="" height="40px" width="40px"></img>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-4">
                                                <div className="fot-para">
                                                    <img src="Images/flog3.png" className='img-fluid' alt="" height="40px" width="40px"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 mt-5">
                                    <div className="fot-head">
                                        <h2 className="fot-heading">
                                            Contact
                                        </h2>
                                        <p className="fot-para">
                                            60 Knutsford BoulevardKingston, Jamaica
                                            <br />
                                            info@tastejamaica.com
                                            <br />
                                            876-920-4926 / 876-926-8684
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-3 ">
                                        <div className="fot-image">
                                            <img src="Images/fot1.png" className='img-fluid fots-img' alt="" height="90px" width="90px"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-3">
                                        <div className="fot-image">
                                            <img src="Images/fot2.png" className='img-fluid fot1-img' alt="" height="90px" width="180px"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-3">
                                        <div className="fot-image">
                                            <img src="Images/fot3.png" className='img-fluid fot1-img' alt="" height="90px" width="200px"></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-3">
                                        <div className="fot-image">
                                            <img src="Images/fot4.png" className='img-fluid fots-img' alt="" height="90px" width="90px"></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <h2 className="fot-para">
                                        © 2023 Tourism Enhancement Fund. All rights reserved.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Footer;
