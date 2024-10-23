import React from "react";
import { Link } from 'react-router-dom';
import Homeimg from "./Homeimg"; // Import Home Section component
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; //import foter
const About = () => {
  return (
    <>
     <div className="main">
      <Navbar /> {/* Include Navbar */}
      <Homeimg /> {/* Include Home Section */}
      <section className="home mb-5 pb-0">
        <div className="container">
          <div className="row mt-10">
            <div className="row ">
              <div className="col-3 mt-5">
                <img
                  src="Images/about-pag-1.png"
                  className="about-page-img img-fluid"
                  alt=""
                ></img>
              </div>
              <div className="col-9 mt-4">
                <div className="about-page-main">
                  <span className="pro-title">ABOUT TASTE JAMAICA</span>
                  <div className="row mt-4">
                    <br />
                    <p>
                      If food is the language of love, then Jamaica's
                      unmistakable flavours in its variety of spices, fruits,
                      beverages and distinctive cuisine will surely win the
                      hearts of locals and visitors alike.
                      <br />
                      <br />
                      It is certainly no easy feat that our small island
                      Caribbean state, when stacked against 195 existing
                      countries, has successfully managed to be counted among
                      the world's best for its expansive palette of tastes.
                      <br />
                      <br />
                      CNN Travel recently listed Jamaica's jerk pork and chicken
                      among the "20 best spicy foods across the globe to try."
                      National Geographic named Kingston's Devon House the
                      fourth-best place in the world to eat ice cream. Our
                      premium Blue Mountain-grown coffee continues to be
                      favourably ranked by connoisseurs as one of the finest to
                      sip. And, with world-famous actors ranging from Sean
                      Connery to Tom Cruise drinking from the red and white
                      glass bottle, our locally brewed Red Stripe remains as
                      iconic for its distinct flavour as it does for cementing
                      its legacy on the big screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <p className="about-page-para">
                With this favourable reputation in mind, and to build on the
                great dynamism of our country's culinary offerings through our
                chefs and restaurants, the Ministry of Tourism has sought to
                improve the gastronomical experience for our visitors. It is for
                this reason that the Tourism Linkages Network (TLN), a division
                of the Tourism Enhancement Fund (TEF), established Taste Jamaica
                through the Gastronomy Network, led by our irrepressibly
                forward-thinking Chairperson Nicola Madden-Greig and her team.
                <br />
                <br />
                Envisioned as a catalyst to make the Jamaican dining experience
                more curated, the aim of both the TLN and its Gastronomy Network
                is to tap into the wide berth of the island's dining
                experiences, from four-star epicurean restaurants and riverside
                dining to authentic farm-to- table and our amazing street food
                scene. While opportunities exist within related sub-sectors,
                from agriculture to the culinary arts, the ultimate hope for the
                industry is one of growth and evolution to meet the changing
                shifts and tastes of the discerning traveller.
                <br />
                <br />
                Taste Jamaica is eager to meet this challenge and is ready to
                embrace the changes that come with it. We are, therefore,
                immensely proud of this initiative, which will make it easier
                for users to learn more about our island’s culinary offerings.
              </p>
              <h4>Hon. Edmund Bartlett, CD, MP</h4>
              <h4>Minister of Tourism</h4>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-4 text-center">
              <img
                src="Images/about-page-log.png"
                className="about-page-img img-fluid"
                alt=""
              ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <Footer /> {/*  include footer */}
      </div>
    </>
  );
};

export default About;
