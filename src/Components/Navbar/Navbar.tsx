import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Next logo.png";

const Navbar = () => {
  return (
    <div className="nav-section-div">
      <div className="parent-div">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="nav-buttons">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div className="last-button">Button Text</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
