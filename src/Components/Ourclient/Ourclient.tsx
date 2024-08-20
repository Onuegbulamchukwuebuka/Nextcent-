import React from "react";
import "./Ourclient.css";
import clientlogo1 from "../../Assets/logo1.png";
import clientlogo2 from "../../Assets/logo2.png";
import clientlogo3 from "../../Assets/logo3.png";
import clientlogo4 from "../../Assets/logo4.png";
import Marquee from "react-fast-marquee";

const Ourclient = () => {
  return (
    <div className="ourclient-section-div">
      <div className="ourclient-parent-div">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <Marquee>
          {" "}
          <div className="clientlogo-div">
            <div>
              <img src={clientlogo1} alt="" />
            </div>
            <div>
              <img src={clientlogo2} alt="" />
            </div>
            <div>
              <img src={clientlogo3} alt="" />
            </div>
            <div>
              <img src={clientlogo4} alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Ourclient;
