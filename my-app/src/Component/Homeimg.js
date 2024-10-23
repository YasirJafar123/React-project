// src/Component/HomeSection.js
import React from 'react';

const Homeimg = () => {
  return (
    <section className="home mb-5 pb-0">
      <div className="container">
        <div className="row mt-10">
          <div className="background-images mt-5">
            <img src="Images/image1.png" alt="tree left img"className="left-side-img img-fluid" />
            <img src="Images/image2.png" alt="tree right img" className="right-side-img img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeimg;
