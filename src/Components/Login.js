import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
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
      <div class="containers">
        <div id="forms">
          <div class="form-login">
            <form action="#">
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
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">

                  </div>
                  <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField style={{ width: '250px' }} id="input-with-sx" label="Password" variant="standard" />
                    </Box>
                  </Box>
                </div>
              </div>

              <div class="forget">
                <Link to='/forgetpass'>Forgot Password?</Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ marginRight: '20px', borderRadius: '20px', width: '100px', fontWeight: '400' }} class="btn btn-primary" onClick={() => navigate(-1)}> Back</button>

                <button style={{ marginLeft: '20px', borderRadius: '20px', width: '100px', fontWeight: '400' }} type="submit" class=" btn btn-primary ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>








  )
}

export default Login