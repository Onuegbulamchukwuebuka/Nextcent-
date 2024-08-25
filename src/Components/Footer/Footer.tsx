import React from "react";
import "./Footer.css";
import footerlogo from "../../Assets/footer logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section-div">
      <div className="footer-parent-div">
        <div className="footer">
          <div>
            <div id="icon-div">
              <div id="footer-img">
                <img src={footerlogo} alt="" />
              </div>
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
              <div id="footericons">
                <FaTwitterSquare style={{ height: "30px", width: "30px" }} />
                <FaLinkedin style={{ height: "30px", width: "30px" }} />
                <FaFacebookSquare style={{ height: "30px", width: "30px" }} />
              </div>
            </div>
            <div className="write">
              <h4>Company</h4>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Pricing</p>
              <p>How it works</p>
              <p>Docs</p>
            </div>
          </div>
          <div>
            <div className="write">
              <h4>Resources</h4>
              <p>Help Center</p>
              <p>Term of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>See all resources</p>
            </div>
            <div className="write">
              <h4>About</h4>
              <p>Terms & Conditions</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <p>Copyright © 2021 Peush Jha</p>
      </div>
    </div>
  );
};

export default Footer;
