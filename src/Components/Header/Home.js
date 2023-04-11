import React from "react";

import "./Home.css";
import Header from "./Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Programs from "./Programs";
import Management from "./Management";

function Home() {
  return (
    <div id="main-div">
      <Header />
      <Navbar />

      <img
        style={{ height: "560px", width: "100%", marginTop: "150px" }}
        src="http://tgpcet.com/assets/img/banner/19.jpg"
        alt="..."
      />
      <Programs />
      <Management />
      <Footer />
    </div>
  );
}

export default Home;
