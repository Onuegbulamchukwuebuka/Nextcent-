import React from "react";
import "./Marketing.css";
import woman from "../../Assets/woman.png";

const Marketing = () => {
  return (
    <div className="Marketing-section-div">
      <div className="Marketing-parent-div">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
        <div className="Caring-div">
          <div>
            <div>
              <img src={woman} alt="" />
            </div>
            <div id="detail-div">
              {" "}
              <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <button>Read More</button>
            </div>
          </div>
          <div>
            <div>
              <img src={woman} alt="" />
            </div>
            <div id="detail-div">
              {" "}
              <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <button>Read More</button>
            </div>
          </div>
          <div>
            <div>
              <img src={woman} alt="" />
            </div>
            <div id="detail-div">
              <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
