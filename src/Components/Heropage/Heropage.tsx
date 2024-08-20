import React from "react";
import "./Heropage.css";
import heroimage from "../../Assets/Hero image.png";

const Heropage = () => {
  return (
    <div className="hero-section-div">
      <div className="hero-parent-div">
        <div>
          <h1>Lessons and insights</h1>
          <h1 className="years">from 8 years</h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>
        <div>
          <img src={heroimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
