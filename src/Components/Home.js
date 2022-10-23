import React from "react";
import tgpcetImg from "../Components/Images/tgpcetImg.png";
import AlumnImg from "../Components/Images/AlumnImg.png";
import tgpcetLogo from "../Components/Images/tgpcetLogo.png";
function Home() {
  return (
    <div id="main-div">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              style={{ height: "600px" }}
              src={tgpcetImg}
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              style={{ height: "600px" }}
              src={AlumnImg}
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "600px" }}
              src={tgpcetLogo}
              className="d-block w-100  "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
