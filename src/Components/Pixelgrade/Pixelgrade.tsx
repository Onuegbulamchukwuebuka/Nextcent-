import React from "react";
import "./Pixelgrade.css";
import Pixelgradeimage from "../../Assets/Pixelgrade image.png";

const Pixelgrade = () => {
  return (
    <div className="Pixelgrade-section-div">
      <div className="Pixelgrade-parent-div">
        <div>
          <img src={Pixelgradeimage} alt="" />
        </div>
        <div>
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            aliquid ipsam explicabo eligendi natus, eos sunt repellat sed soluta
            labore perferendis exercitationem aut? Placeat officiis nulla
            debitis explicabo, aperiam optio!
          </p>
          <div>Button Text</div>
        </div>
      </div>
    </div>
  );
};

export default Pixelgrade;
