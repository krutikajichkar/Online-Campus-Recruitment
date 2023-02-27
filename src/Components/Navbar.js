import React, { useState } from "react";
import "./Navbar.css";
import fullSizeLogo from "../Components/Images/fullSizeLogo.png";
import MenuIcon from "@mui/icons-material/Menu";

import { NavLink , Link} from "react-router-dom";





function Navbar() {
  
  
  return (
    <div>
      <nav>
        <ul type="none">
          <NavLink className='link' to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className='link' to="/about">
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink className='link' to="/activities">
            {" "}
            <li>Alumni Activities</li>
          </NavLink>
          <li>Alumni Committee</li>
          <NavLink className='link' to='/feedback'>
            {" "}
            <li>Feedback</li>
          </NavLink>
          <NavLink className="link" to='/placedstudents'>
            {" "}
            <li>PlacedStudents</li>
          </NavLink>
          {/* <NavLink className="link" to='/studentdashboard'>
            {" "}
            <li>StudentDashboard</li>
          </NavLink> */}
          {/* <NavLink className="link" to='/admindashboard'>
            {" "}
            <li>AdminDashboard</li>
          </NavLink> */}
           <NavLink className="link" to='/hoddashboard'>
            {" "}
            <li>HodDashboard</li>
          </NavLink> 
        </ul>
        <div style={{ display: "flex" }}>
          <div className="dropdown" style={{ paddingRight: "20px" }}>
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                fontSize: "20px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Register
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <Link to='/register' className="link">
                <li >
                  <button
                    className="dropdown-item link"
                    type="button"
                   
                    
                  >
                    Student Registration
                  </button>
                </li>
              </Link>
              <Link to='alumniregister' className="link">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                   
                  >
                    Alumni Registration
                  </button>
                </li>
              </Link>
              {/* <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li> */}
            </ul>
          </div>
          <div className="dropdown" style={{ paddingRight: "20px" }}>
            <button
              className=" dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                fontSize: "20px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <Link to='/login' className="link">
                <li>
                  <button className="dropdown-item" type="button" >
                    Admin Login
                  </button>
                </li>
              </Link>
              <Link to="hodlogin" className="link">
                <li>
                  <button className="dropdown-item" type="button" >
                    HOD Login
                  </button>
                </li>
              </Link>

             <Link to='studentlogin' className="link">
             <li>
                <button className="dropdown-item" type="button" >
                  Student Login
                </button>
              </li>
             </Link>
              <Link to='alumnilogin' className="link">
              <li>
                <button className="dropdown-item" type="button" >
                  Alumni Login
                </button>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div id="screen-visible-div">
        <span></span>
        <button
          style={{ backgroundColor: "transparent", border: 'none' }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBackdrop"
          aria-controls="offcanvasWithBackdrop"
        >
          {" "}
          <MenuIcon id="menuicon" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasWithBackdrop"
          aria-labelledby="offcanvasWithBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
              Hello there
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul type="none">
              <NavLink className="link " to="/" >
                <li>Home</li>
              </NavLink>
              <NavLink className="link" to="/about">
                {" "}
                <li>About</li>
              </NavLink>
              <li>Alumni Comitte</li>
              <li>Alumni Activities</li>
              <li>Feedback</li>
              <li>
                <div className="btn-group dropend">
                  <button
                    type="button"
                    className=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                      border: "none",
                    }}
                  >
                    Register
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Alumni Register
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Student Register
                      </button>
                    </li>
                    {/* <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li>
                <div className="btn-group dropend">
                  <button
                    type="button"
                    className=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                      border: "none",
                    }}
                  >
                    Login
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        Admin Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        HOD Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Student Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Alumni Login
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span>
          <center>
            {" "}
            <img src={fullSizeLogo} alt="tgpcetlogo" />
          </center>
        </span>
      </div>


    </div>
  );
}


export default Navbar;
