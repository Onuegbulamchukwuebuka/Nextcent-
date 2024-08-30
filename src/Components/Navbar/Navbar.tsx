import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Next logo.png";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="nav-section-div">
      <div className="parent-div">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-buttons">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div className="last-button">Button Text</div>
        </div>
        <div className="menuicon">
          <IoIosMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
