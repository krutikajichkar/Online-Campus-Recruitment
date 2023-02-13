import React from 'react'
import './Register.css';

import { useNavigate, } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Registration() {
  const navigate = useNavigate();
  return (
    <div id="box">
      <div class="container1">
        <div class="forms">
          <div class="form-login">
            <form action="#">

              <h2>Student Registration</h2>
              <p class="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              <div class="form-groups">
                <TextField fullWidth label="Username" id="fullWidth" type="text" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Email" id="fullWidth" type="email" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Password" id="fullWidth" type="password" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Department" id="fullWidth" type="department" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Session" id="fullWidth" required="required" />
              </div>

              <div class="form-groups">
                <label class="form-check-label" ></label>
                <input type="checkbox" required="required" /> Remember me

              </div>
              <div class="form-groups">
                <button type="submit" class="btn1 btn-success btn-lg btn-block">
                  Register Now
                </button>
                {/* <div class="btnback">
                  <button class="backbtn" onClick={() => navigate(-1)}>Go Back</button>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration