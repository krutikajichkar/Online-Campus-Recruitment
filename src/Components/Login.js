import React from 'react'
import './Login.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, } from 'react-router-dom';
import { PropaneSharp } from '@mui/icons-material';

function Login(props) {
  const navigate = useNavigate();
  return (
    <div class="signup">
      <div>

        <div class="signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>{props.person} Login</h2>
            <center><p>Please Login into your account!</p></center>
            <hr />
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                </div>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Username" variant="standard" />
                  </Box>
                </Box>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">

                </div>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Password" variant="standard" />
                  </Box>
                </Box>
              </div>
            </div>

            <div class="form-group">
              <label class="form-check-label"
              ><input type="checkbox" required="required" /> Remember me</label
              >
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg">Login</button>
            </div>
            <div id="btnback">
              <button class="backbtn" onClick={() => navigate(-1)}><ArrowBackIcon></ArrowBackIcon>Go Back</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login