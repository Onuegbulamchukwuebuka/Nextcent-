import React from "react";
import "./Community.css";
import user from "../../Assets/user.png";
import house from "../../Assets/house.png";
import hand from "../../Assets/hand.png";

const Community = () => {
  return (
    <div className="community-section-div">
      <div className="community-parent-div">
        <h1>Manage your entire community in a single system</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="community-div">
          <div className="box1">
            <div className="box1-1">
              <div>
                <img src={user} alt="" />
              </div>
              <h2>Membership Organisations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className="box1-1">
              <div>
                <img src={house} alt="" />
              </div>
              <h2>National Associations</h2>
              <p>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="box1-1">
            <div>
              <img src={hand} alt="" />
            </div>
            <h2>Clubs And Groups</h2>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
