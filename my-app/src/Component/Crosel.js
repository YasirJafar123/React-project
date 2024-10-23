import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";

const Crosel = () => {
    const [playingVideo, setPlayingVideo] = useState(null); // Track the video URL for overlay

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "25%",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0",
                },
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    centerPadding: "0",
                },
            },
        ],
    };

    const handleVideoClick = (url) => {
        setPlayingVideo(url); // Show video when play button is clicked
    };

    const closeVideoOverlay = () => {
        setPlayingVideo(null); // Close video overlay when clicking outside video
    };

    return (
        <div className="main">
            <div className="row">
                <Slider className="slick-slider" {...settings}>
                    {/* Slide 1 */}
                    <div className="slide">
                        <img src="/Images/cros1.png" className="cros-img img-fluid" alt="Slide 1" />
                        <div className="crosel-icon" onClick={() => handleVideoClick("https://youtu.be/y8utu7ROD0k")}>
                            <PlayIcon />
                        </div>
                        <SlideText title="Cooking Live with Stush in the Bush" />
                    </div>

                    {/* Slide 2 */}
                    <div className="slide">
                        <img src="/Images/cros2.png" className="cros-img img-fluid" alt="Slide 2" />
                        <div className="crosel-icon" onClick={() => handleVideoClick("https://youtu.be/lRfmW9Vu7Cg")}>
                            <PlayIcon />
                        </div>
                        <SlideText title="Home Cooking Live" />
                    </div>

                    {/* Slide 3 */}
                    <div className="slide">
                        <img src="/Images/cros3.png" className="cros-img img-fluid" alt="Slide 3" />
                        <div className="crosel-icon" onClick={() => handleVideoClick("https://youtu.be/j_54Gn7hUB0")}>
                            <PlayIcon />
                        </div>
                        <SlideText title="Taste Jamaica with Brian" />
                    </div>
                </Slider>

                {/* Video Overlay */}
                {playingVideo && (
                    <div className="video-overlay" onClick={closeVideoOverlay} style={overlayStyles}>
                        <div className="video-container" onClick={(e) => e.stopPropagation()} style={videoContainerStyles}>
                            <ReactPlayer
                                url={playingVideo}
                                playing
                                controls
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Icon component for play button
const PlayIcon = () => (
    <svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.8284 0.788971C42.8284 0.788971 36.9443 0 24.3075 0C12.0806 0 5.92616 0.788971 5.92616 0.788971C4.35424 0.789598 2.84691 1.45561 1.7356 2.64056C0.624291 3.8255 3.04601e-07 5.43237 4.14439e-07 7.10783V30.81C-0.000290678 31.6398 0.152763 32.4616 0.450423 33.2283C0.748083 33.9951 1.18452 34.6919 1.73481 35.2788C2.28511 35.8658 2.93849 36.3315 3.65764 36.6494C4.37679 36.9672 5.14764 37.1309 5.92616 37.1313C5.92616 37.1313 11.6484 37.9155 24.3075 37.9155C36.9598 37.9155 42.8284 37.1313 42.8284 37.1313C43.6073 37.1319 44.3786 36.9688 45.0983 36.6513C45.8179 36.3338 46.4718 35.8682 47.0225 35.2811C47.5731 34.6939 48.0097 33.9968 48.3073 33.2296C48.6049 32.4624 48.7576 31.6402 48.7568 30.81V7.1031C48.7568 6.27352 48.6034 5.45207 48.3054 4.6857C48.0074 3.91932 47.5707 3.22305 47.0201 2.63667C46.4695 2.05028 45.816 1.58529 45.0967 1.26825C44.3775 0.951214 43.6067 0.788351 42.8284 0.788971ZM17.8649 28.3463V9.57868L33.6754 18.9566L17.8649 28.3463Z" fill="#E91717"></path>
        <path d="M17.5003 9.49984L34.0005 18.9999L17.5 28.5L17.5003 9.49984Z" fill="white"></path>
    </svg>
);

// Slide Text Component
const SlideText = ({ title }) => (
    <div className="slide-text">
        <div className="row text-center">
            <div className="col-3">
                <img src="Images/crosl-logo.png" className="img img-fluid" alt="" />
            </div>
            <div className="col-9">
                <p className="slide-para">{title}</p>
            </div>
        </div>
    </div>
);

// Styling for the overlay and video container
const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    border:'unset'
};

const videoContainerStyles = {
    width: '74.8%',
    height: '90%',
    position: 'relative',
};

export default Crosel;
