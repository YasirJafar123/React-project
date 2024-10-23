import React from "react";
import { Link } from "react-router-dom";
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const Culainry = () => {
    return (
        <>
            <div className="main">
                <Navbar /> {/* Include Navbar */}
                <Homeimg /> {/* Include Home Section */}
                <section className="Culainry mb-5 pb-0" >
                    <div className="container">
                        <div className="row ">
                            <div className="row justify-content-center mt-5">
                                <div className="col-lg-10 col-12 text-center mt-5">
                                    <h2 className="cuilanry-page-title">Submit your Culinary Experience </h2>
                                    <div className="text text-end">Get Listed</div>
                                    <div className="d-flex align-items-center justify-content-center text-center">
                                        <span className="mx1">About
                                            Us</span>
                                        <hr className="flex-grow-1"></hr>
                                    </div>
                                </div>

                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-12">
                                    <p className="culainary-submitpara">The Tourism
                                        Linkages
                                        Network, a division of the Tourism Enhancement Fund has created Taste Jamaica, a fully
                                        integrated website and mobile app that lists a variety of culinary experiences from
                                        street
                                        food to fine dining, farm to table and food events across the island. There is no cost
                                        to be
                                        included on this platform! To have your culinary experience included on Taste Jamaica
                                        simply
                                        submit your business information below. You must register your profile for data security
                                        purposes. Click here to <span>Sign
                                            Up.</span>
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center  text-center mb-3">
                                        <span className="mx1">BUSINESS
                                            DETAILS</span>
                                        <hr className="flex-grow-1"></hr>
                                    </div>
                                    <form action="">
                                        <div className="form-group">
                                            <label for="last-name">
                                                Name of Business</label>
                                            <input type="name" className="form-control mt-1 mb-3" id="business-name"
                                                placeholder="Your company name for eg. Taste Jamaica restaurant"></input>

                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="text area">Description of your business</label>
                                            <input type="text-area" className="form-control mb-3" id="business-name"
                                                placeholder="Describe your business"></input>
                                        </div>
                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label className="text area">Type of Business <span classNameName="span">
                                                    (You can select more than one option)</span>
                                                </label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="1">jamaica</option>
                                                    <option value="2">chezious</option>
                                                    <option value="3">online</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="text area">Do you operate remotely?</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select</option>
                                                        <option value="1">jamaica</option>
                                                        <option value="2">chezious</option>
                                                        <option value="3">online</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="text area">Do you offer delivery services?</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Select</option>
                                                        <option value="1">Car</option>
                                                        <option value="2">bike</option>
                                                        <option value="3">bycycle</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center  text-center mt-3">
                                            <span className="mx1">CONTACT INFORMATION</span>
                                            <hr className="flex-grow-1"></hr>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="row mt-4">
                                                    <div className="col-lg-12 col-sm-12 col-6">
                                                        <div className="form-group mb-3">
                                                            <label for="text area">Address</label>
                                                            <input type="text-area" className="form-control" id="business-name"
                                                                placeholder="60 Knutsford Boulevard, Kingston 8"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-sm-12 col-6">
                                                        <div className="form-group ">
                                                            <label for="text area">Parish</label>
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Select</option>
                                                                <option value="1">culainry</option>
                                                                <option value="2">blue montain</option>
                                                                <option value="3">form table</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12  mt-4 text-center">
                                                <img src="Images/culainry-page.png" className="culanry-page-img img-fluid" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="last-name">Phone
                                                        number</label>
                                                    <input type="number" className="form-control mb-3" id="business-name"
                                                        placeholder="876-456-7690"></input>

                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="last-name">Email
                                                        Address</label>
                                                    <input type="email" className="form-control mb-3" id="business-name"
                                                        placeholder="Email"></input>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="last-name">Website</label>
                                            <input type="website" className="form-control mb-3" id="business-name"
                                                placeholder="Website"></input>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="last-name">Facebook</label>
                                                    <input type="website" className="form-control mb-3" id="business-name"
                                                        placeholder="https://www.facebook.com/#"></input>

                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="last-name">Instagram</label>
                                                    <input type="website" className="form-control mb-3" id="business-name"
                                                        placeholder="https://www.instagram.com/#"></input>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center  text-center mt-3">
                                            <span className="mx1">ADDITIONAL Business Details</span>
                                            <hr className="flex-grow-1"></hr>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="text area">What
                                                        Cuisines do you offer?
                                                        <br />
                                                        <span className="span">(You
                                                            can select more than one option)</span>
                                                    </label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected></option>
                                                        <option value="1">jamaica</option>
                                                        <option value="2">chezious</option>
                                                        <option value="3">online</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group mt-3">
                                                    <label for="text area">What
                                                        Cuisines do you offer?
                                                        <br />
                                                        <span className="span">(You
                                                            can select more than one option) </span> </label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected></option>
                                                        <option value="1">Car</option>
                                                        <option value="2">bike</option>
                                                        <option value="3">bycycle</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label for="last-name">Payment
                                                Method <span className="span"> (You
                                                    can select more than one option)</span></label>
                                            <input type="option" className="form-control mb-3" id="business-name"
                                                placeholder="Credit Card Debit Card Cash on Delivery Cash "></input>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-sm-6 col-12">
                                                <div className="form-group1 mt-3">
                                                    <label className="last-name">Upload
                                                        Public Health Certificate <span className="span">
                                                            (optional)</span></label>
                                                    <div className="row mt-3">
                                                        <div className="col-4">
                                                            <div className="file_name">
                                                                <input type="file" className="form-control-file" id="business-name1"></input>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6 col-12">
                                                <div className="form-group1 mt-3">
                                                    <label className="last-name">Upload
                                                        Food handlers permit <span className="span">
                                                            (optional)</span></label>
                                                    <div className="row mt-3">
                                                        <div className="col-4">
                                                            <div className="file_name">
                                                                <input type="file" className="form-control-file" id="business-name1" placeholder="Browse"></input>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center  text-center mt-3">
                                            <span className="mx1">Business Hours</span>
                                            <hr className="flex-grow-1"></hr>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-6  col-md-12 mb-5 mt-5">
                                                <div className="row">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Monday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <input type="checkbox" className="checkbox"></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Open</span></h4>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Tuesday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <input type="checkbox" className="checkbox"></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Open</span></h4>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Wednesday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <input type="checkbox" className="checkbox"></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Open</span></h4>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Thursday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <input type="checkbox" className="checkbox"></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Open</span></h4>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Friday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <input type="checkbox" className="checkbox"></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>

                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Open</span></h4>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Saturday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <input type="checkbox" className="checkbox"></input>
                                                            <span className="slider round"></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Open</span></h4>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-lg-6 col-4">
                                                        <h4 className="culainry-toggle"><span>Sunday</span></h4>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <label className="switch">
                                                            <div className="slider-color">
                                                                <input type="checkbox" className="checkbox"></input>
                                                                <span className="slider round"></span>
                                                            </div>

                                                        </label>
                                                    </div>
                                                    <div className="col-lg-3 col-4">
                                                        <h4 className="culainry-toggle"><span>Close</span></h4>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-lg-6 col-12">
                                                <div className="row">
                                                    <div className="col-lg-6 col-4">
                                                        <div className="buttn-data">
                                                            <h4 className="culainry-toggle">
                                                                Open</h4>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>9:00am</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="buttn-data">
                                                            <h4 className="culainry-toggle">
                                                                Close</h4>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3 ">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-12">
                                                                    <button className="button"><span>1:00pm</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center  text-center mt-3">
                                            <span className="mx1">Upload Photos</span>
                                            <hr className="flex-grow-1"></hr>
                                        </div>
                                        <div className="row mt-3">
                                            <span className="span1">Bring your profile to life with images of your culinary experience. 5 photos are
                                                required. </span>
                                            <div className="text-area col-12 mt-3">
                                                <label for="formFileMultiple" className="form-label1 mt-3">Click here to upload
                                                    photos</label>
                                                <input className="form-control" type="file"
                                                    id="formFileMultiple" multiple />
                                                <div className="img-text mt-5">
                                                    <span className="input-img">File type recommended PNG or JPEG
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center  text-center mt-3">
                                            <span className="mx1">Add Menu</span>
                                            <hr className="flex-grow-1"></hr>
                                        </div>
                                        <div className="d-flex flex mt-3">
                                            <h5 className="mx">
                                                <span className="culanry_h5">PDFor Photo </span>Link to menu
                                            </h5>

                                            <hr className="flex-grow-1"></hr>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="text-area col-12">
                                                <label for="formFileMultiple" className="form-label1 mt-5">Drag and drop a PDF, JPG
                                                    or
                                                    TIFF</label>
                                                <input className="form-control mt-5" type="file"
                                                    id="formFileMultiple" multiple />
                                                <div className="img-text">
                                                    <span className="input-img">(5MB Max)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 mt-5">
                                                <label>
                                                    <div className="slider-text">
                                                        <input type="checkbox" className="chk-text"></input>
                                                        <span className="check-text">You agree for the Tourism Enhancement Fund an
                                                            agency of
                                                            the Ministry of Tourism to use your data to display on
                                                            www.tastejamaica.com
                                                            and the Taste Jamaica mobile app.</span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row text-end mt-5">
                                        <div className="col-12">
                                            <button type="button" className="see-btn3">Preview Submission</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                </section >

                <Footer /> {/*  include footer */}
            </div>
        </>

    );
};
export default Culainry;