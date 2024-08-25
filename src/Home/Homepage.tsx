import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Heropage from "../Components/Heropage/Heropage";
import Ourclient from "../Components/Ourclient/Ourclient";
import Community from "../Components/Community/Community";
import Pixelgrade from "../Components/Pixelgrade/Pixelgrade";
import Helping from "../Components/Helping/Helping";
import Marketing from "../Components/Marketing/Marketing";
import Footer from "../Components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Ourclient />
      <Community />
      <Pixelgrade />
      <Helping />
      <Marketing />
      <Footer />
    </div>
  );
};

export default Homepage;
