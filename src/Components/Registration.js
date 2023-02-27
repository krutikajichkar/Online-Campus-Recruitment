import React from 'react'
import './Register.css';

import { useNavigate, } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

function Registration() {
  const navigate = useNavigate();
  return (

    <div id="box">

      <div class="container1">
        <div class="forms">
          <div class="form-login2">
            <form action="#">

              <h2 class="reg_name">Student Registration</h2>
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
                <input class="chekbox" type="checkbox" required="required" /> Remember me

              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ marginRight: '20px', borderRadius: '20px', width: '100px', fontWeight: '400' }} class="btn btn-primary" onClick={() => navigate(-1)}> Back</button>

                <button style={{ marginLeft: '20px', borderRadius: '20px', width: '150px', fontWeight: '400' }} type="submit" class=" btn btn-primary ">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration