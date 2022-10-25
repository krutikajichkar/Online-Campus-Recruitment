import React from "react";
import "./Navbar.css";
import fullSizeLogo from "../Components/Images/fullSizeLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul type="none">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/about">
            {" "}
            <li>About</li>
          </Link>
          <li>Alumni Activities</li>
          <li>Alumni Committee</li>
          <li>Feedback</li>
        </ul>
        <div style={{ display: "flex" }}>
          <div class="dropdown" style={{ paddingRight: "20px" }}>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "20px" }}
            >
              Register
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button class="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown" style={{ paddingRight: "20px" }}>
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "20px" }}
            >
              Login
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button class="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="screen-visible-div">
        <span></span>
        <button
          style={{ backgroundColor: "transparent" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBackdrop"
          aria-controls="offcanvasWithBackdrop"
        >
          {" "}
          <MenuIcon id="menuicon" />
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasWithBackdrop"
          aria-labelledby="offcanvasWithBackdropLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
              Hello there
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul type="none">
              <Link className="link" to="/">
                <li>Home</li>
              </Link>
              <Link className="link" to="/about">
                {" "}
                <li>About</li>
              </Link>
              <li>Alumni Comitte</li>
              <li>Alumni Activities</li>
              <li>Feedback</li>
              <li>
                
              <div class="btn-group dropend">
                  <button
                    type="button"
                    class=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{backgroundColor:'transparent',fontSize:'20px'}}
                  >
                    Register
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="btn-group dropend">
                  <button
                    type="button"
                    class=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{backgroundColor:'transparent',fontSize:'20px'}}
                  >
                    Login
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Something else here
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
