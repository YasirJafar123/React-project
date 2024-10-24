import React, { useState } from 'react';
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import footer
import './Style.css';

function Pdf() {
    const [isLargeView, setIsLargeView] = useState(true);

    const toggleView = () => {
        setIsLargeView(!isLargeView);
    };

    const pdfSource = "assets/Taste_jamica_recipies.pdf"; // Adjust the path as necessary

    return (
        <>
            <div className="main">
                <Navbar/> {/* Include Navbar */}
                <Homeimg/> {/* Include Home Section */}
                <section className="home mb-5 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="main-end  text-center">
                                    <span className="pro-title">TASTE JAMAICA RECIPIES</span>
                                </div>
                            </div>
                                <div className="Pdf_file mt-5">

                                    <iframe
                                        src={pdfSource}
                                        id="pdf-iframe"
                                        style={{
                                            width: isLargeView ? '100%' : '50%', // Adjust the width for thumbnail view
                                            height: isLargeView ? '600px' : '300px', // Adjust the height for thumbnail view

                                        }}
                                        title="PDF Viewer"
                                    ></iframe>
                                </div>
                            </div>
                    </div>
                </section>
                <br />
                <br/>
                <br/>
                <Footer /> {/*  include footer */}
            </div>
                        </>
                        );
                        }

                        export default Pdf;
