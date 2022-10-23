import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul type="none">
          <li>Home</li>
          <li>About</li>
          <li>Alumni Activities</li>
          <li>Alumni Committee</li>
          <li>Feedback</li>
        </ul>
        <div style={{display:'flex'}}>
          <div class="dropdown" style={{padding:'8px'}}>
            <button
              class="btn  dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{fontSize:'20px'}}
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
            <div class="dropdown" style={{padding:'8px'}}>
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{fontSize:'20px'}}
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
    </div>
  );
}

export default Navbar;
