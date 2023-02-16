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
          <div class="form-login2">
            <form action="#">

              <h2>Student Registration</h2>
              <p class="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              <div class="form-groups">
                <TextField fullWidth label="Username" id="fullWidth" size="small" type="text" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Email" id="fullWidth" size="small" type="email" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Password" id="fullWidth" size="small" type="password" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Department" id="fullWidth" size="small" type="department" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Session" id="fullWidth" size="small" required="required" />
              </div>

              <div class="form-groups">
                <label class="form-check-label" ></label>
                <input type="checkbox" required="required" /> Remember me

              </div>
              <div class="btn-group">
                <div class="left-btn">
                  <button class="btn1 btn btn-primary btn-sm" onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <div class="right-btn">
                  <button type="submit" class="btn1 btn btn-primary btn-sm">
                    Register Now
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration