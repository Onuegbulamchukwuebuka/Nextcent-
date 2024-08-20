import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Heropage from "../Components/Heropage/Heropage";
import Ourclient from "../Components/Ourclient/Ourclient";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Ourclient />
    </div>
  );
};

export default Homepage;
