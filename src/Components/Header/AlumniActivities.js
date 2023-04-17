import React from "react";
import Glimpses_1 from "../Images/Glimpses_1.jpg";
import Glimpses_2 from "../Images/Glimpses_2.jpg";
import Glimpses_3 from "../Images/Glimpses_3.jpg";
import JayantSir from "../Images/JayantSir.jpg";
import Pune_img_1 from "../Images/Pune_img_1.jpg";
import Pune_img_2 from "../Images/Pune_img_2.jpg";
import Pune_img_3 from "../Images/Pune_img_3.jpg";
import Pune_img_4 from "../Images/Pune_img_4.jpg";
import Pune_img_5 from "../Images/Pune_img_5.jpg";
import Pune_img_8 from "../Images/Pune_img_8.jpg";
import Alumni_2017_img_1 from "../Images/Alumni_2017_img_1.jpg";
import Alumni_2017_img_2 from "../Images/Alumni_2017_img_2.jpg";
import Alumni_2017_img_3 from "../Images/Alumni_2017_img_3.jpg";
import Alumni_2017_img_4 from "../Images/Alumni_2017_img_4.jpg";
import Alumni_2017_img_5 from "../Images/Alumni_2017_img_5.jpg";
import Alumni_2017_img_9 from "../Images/Alumni_2017_img_9.jpg";

import "./AlumniActivities.css";
import Header from "./Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AlumniActivities() {
  return (
    <>
      <Header />
      <Navbar />

      <center>
        <div className="jayant_sir ">
          <img src={JayantSir} alt="jayant_sir_img" />
          <h3>MR.JAYANT ROHANKAR</h3>
          <p>Alumni Incharge</p>
          <p>8554982302</p>
          <p>jayant.mtech@tgpcet.com</p>
        </div>
      </center>

      <center>
        <div className="Alumni-meet-wrapper">
          <h2 className="alumni-header"> ALUMNI MEET </h2>
          <p className="underline"></p>
          <h3 className="panel-heading">
            Tulsiramji Gaikwad-Patil College of Engineering & Technology Alumni
            Association Registration Number:- MAH 701/14(Nag)
          </h3>
          <p className="panel-detail">
            {" "}
            Nostalgia is the flagship event of the Alumni association of TGPCET.
            It is the annual Alumni Meet - an evocative event that marks home
            coming, celebration and unparalleled joy of communion with the alma
            mater. It is an ideal opportunity to renew old bonds, foster new
            ties and relive the magical moments all over again. The Alumnus
            series is a new initiative launched, which provides an exciting
            platform for regular interaction between the current students & the
            alumni of TGPCET, facilitated by Guest Lectures, Technical Events,
            Workshops, etc.
          </p>
          <p className="panel-detail">
            TusiramjiGaikwad-Patil College of Engineering & Technology Alumni
            network brings together graduates of a variety of programs right
            from its inception. The collective strength of this alumni network
            is the backbone of TGPCET. The alumni association acts as a bridge
            between the illustrious alumni and their alma mater, giving the
            current students and the alumni a chance to develop positive
            synergies and grow together in this process. The strength of any
            institute is comprises the present students, who are the future
            leaders and the alumni of the college, who bring in accolades by
            virtue of their success and standing in the society. It gives an
            opportunity for the present, the past and the incoming batch to
            interact with each other and learn from shared experiences.
          </p>
        </div>
      </center>

      <div className="Alumni-19">
        <h2 className="alumni-header">
          {" "}
          Glimpses of Online Alumni Meet 2019-20{" "}
        </h2>
        <p className="underline"></p>

        <div className=" wrapper-19 container">
          <div className="alumni-card">
            <center>
              <img id="Glimpses_1" src={Glimpses_1} alt="Glimpses_1" />
            </center>
            <p className="caption">
              {" "}
              Alumni, Treasurer, Principal, Vice Principal and Heads present
              during Online Alumni Meet
            </p>
          </div>
          <div className="alumni-card">
            <center>
              <img id="Glimpses_2" src={Glimpses_2} alt="Glimpses_2" />
            </center>
            <p className="caption">
              {" "}
              Alumni of Institute sharing their views about Nationwide lockdown
              due to COVID-19 during Online Alumni Meet
            </p>
          </div>
          <div className="alumni-card">
            <center>
              <img id="Glimpses_3" src={Glimpses_3} alt="Glimpses_3" />
            </center>
            <p className="caption">
              Mr. Amab Singha, 2012 Batch, TCS Workforce Management, Data
              Analyst, Department of Computer Science & Enginnering sharing
              views about Nationwide lockdown due to COVID-19 during Online
              Alumni Meet{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="Alumni-18">
        <h2 className="alumni-header1">Alumni Meet at Pune (Nostalgia 2018)</h2>
        <p className="underline"></p>

        <div className=" wrapper-19 container">
          <div className="alumni-card">
            <center> <img id="Pune_img_2" src={Pune_img_2} alt="Pune_img_2" /></center>
            <p className="caption">
              Hon'ble Principal Dr.G.K. Awari addressing to alumni
            </p>
          </div>
          <div className="alumni-card">
            <center> <img id="Pune_img_1" src={Pune_img_1} alt="Pune_img_1" /></center>
            <p className="caption">
              Lighting of Ceremonial Lamp with the hands of Hon'ble Principal
              Dr.G.K. Awari
            </p>
          </div>
          <div className="alumni-card">
            <center> <img id="Pune_img_3" src={Pune_img_3} alt="Pune_img_3" /></center>
            <p className="caption">
              Hon'ble Prof. Sandeep Gaikwad, Treasurer, GPGI Felicitating Mr.
              Rahul Naidu as Alumni Coordinator of TGPCET in Pune & Mumbai
              Region.
            </p>
          </div>

          <div className="alumni-card">
            <center> <img id="Pune_img_4" src={Pune_img_4} alt="Pune_img_4" /></center>
            <p className="caption">
              Dr.G.K. Awari, Principal, TGPCET Felicitating Ms. Ashwini Kulkarni
              as Alumni Coordinator of TGPCET in Pune & Mumbai Region.
            </p>
          </div>

          <div className="alumni-card">
            <center> <img id="Pune_img_5" src={Pune_img_5} alt="Pune_img_5" /></center>
            <p className="caption">
              Alumni share their views about the achievement of TGPCET
            </p>
          </div>

          <div className="alumni-card">
            <center><img id="Pune_img_8" src={Pune_img_8} alt="Pune_img_8" /></center>
            <p className="caption">
              Alumni share their views about the achievement of TGPCET
            </p>
          </div>
        </div>
      </div>

      <div className="Alumni-17">
        <h2 className="alumni-header2">Alumni Meet 2017</h2>
        <p className="underline"></p>

        <div className=" wrapper-19 container">
          <div className="alumni-card">
            <center> <img
              id="Alumni_2017_img_1"
              src={Alumni_2017_img_1}
              alt="Alumni_2017_img_1"
            /></center>
            <p className="caption">
              Lighting of Ceremonial Lamp with the hands of Chief Guest
            </p>
          </div>
          <div className="alumni-card">
            <center><img
              id="Alumni_2017_img_2"
              src={Alumni_2017_img_2}
              alt="Alumni_2017_img_2"
            /></center>
            <p className="caption">Inauguration of Alumni Meet</p>
          </div>
          <div className="alumni-card">
            <center>
              <img
                id="Alumni_2017_img_3"
                src={Alumni_2017_img_3}
                alt="Alumni_2017_img_3"
              />
            </center>
            <p className="caption">
              Welcome of Chief Guest by Prof. Sandeep Gaikwad, Treasurer, GPGI
            </p>
          </div>
          <div className="alumni-card">
            <center>
              <img
                id="Alumni_2017_img_4"
                src={Alumni_2017_img_4}
                alt="Alumni_2017_img_4"
              />
            </center>
            <p className="caption">
              Chief Guest addressing Alumni of Institute
            </p>
          </div>
          <div className="alumni-card">
            <center>
              <img
                id="Alumni_2017_img_5"
                src={Alumni_2017_img_5}
                alt="Alumni_2017_img_5"
              />
            </center>
            <p className="caption">Department of Mechanical Engineering</p>
          </div>
          <div className="alumni-card">
            <center>
              <img
                id="Alumni_2017_img_9"
                src={Alumni_2017_img_9}
                alt="Alumni_2017_img_9"
              />
            </center>
            <p className="caption">
              Department of Computer Science & Engineering
            </p>
          </div>
        </div>
      
      </div>
    
      <Footer/>
     
    </>
  );
}

export default AlumniActivities;
