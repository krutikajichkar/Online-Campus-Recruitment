import React from 'react'
import './Login.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import { useNavigate, } from 'react-router-dom';
import { PropaneSharp } from '@mui/icons-material';

function Login(props) {
  const navigate = useNavigate();
  return (
    <div id="box">
      <div className="containers">
        <div id="forms">
          <div className="form-login">
            <form action="/examples/actions/confirmation.php" method="post">
              <h2 id="login_name">{props.person} Login</h2>
              <center><p class="login_para">Please Login into your account!</p></center>
              <hr class="hori-line" />
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                  </div>
                  <Box sx={{ '& > :not(style)': { m: 1 } }} >

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField style={{ width: '250px' }} id="input-with-sx" label="Email" variant="standard" />
                    </Box>
                  </Box>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">

                  </div>
                  <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField style={{ width: '250px' }} id="input-with-sx" label="Password" variant="standard" />
                    </Box>
                  </Box>
                </div>
              </div>

              <div className="form-group">
                <label className="form-check-label"
                ><input type="checkbox" required="required" /> Remember me</label>
              </div>
              <div id="btn-group">
                <div id="leftBtn">
                  <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <div id="right-btn">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Login
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

export default Login