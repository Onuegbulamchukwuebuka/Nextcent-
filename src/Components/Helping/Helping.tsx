import React from "react";
import "./Helping.css";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";

const Helping = () => {
  return (
    <div className="Helping-section-div">
      <div className="Helping-parent-div">
        <div>
          <h2>Helping a local</h2>
          <h2 className="business">business reinvent itself</h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="members">
          <div>
            <div>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div id="writeup">
                <h3>2,245,341</h3>
                <p>Members</p>
              </div>
            </div>
            <div>
              <div>
                <img src={icon2} alt="" />
              </div>
              <div id="writeup">
                <h3>828,867</h3>
                <p>Event Bookings</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={icon3} alt="" />
              </div>
              <div id="writeup">
                <h3>46,328</h3>
                <p>Clubs</p>
              </div>
            </div>
            <div>
              <div>
                <img src={icon4} alt="" />
              </div>
              <div id="writeup">
                <h3>1,926,436</h3>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helping;
