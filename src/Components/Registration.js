import React from 'react'
import './Register.css';
import { signup } from '../Firebase';
import { useNavigate, } from 'react-router-dom';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Registration() {
  const navigate = useNavigate();



    const emailRef= useRef();
    const passwordRef= useRef();

    const handleSignup = async()=>{
      try{
        await signup(emailRef.current.value, passwordRef.current.value)
      alert('Registered Succesfully!!');
      navigate('/dashboard')
      }
      catch(error){
        alert(error.message);
      }
      
    }
  
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
              {/* <div class="form-groups">
                <TextField fullWidth label="Username" id="fullWidth" size="small" type="text" required="required" />
              </div> */}
              <div class="form-groups">
                <TextField forwardRef={emailRef} fullWidth label="Email" id="fullWidth" size="small" type="email" required="required" />
              </div>
              <div class="form-groups">
                <TextField forwardRef={passwordRef} fullWidth label="Password" id="fullWidth" size="small" type="password" required="required" />
              </div>
              {/* <div class="form-groups">
                <TextField fullWidth label="Department" id="fullWidth" size="small" type="department" required="required" />
              </div>
              <div class="form-groups">
                <TextField fullWidth label="Session" id="fullWidth" size="small" required="required" />
              </div>

              <div class="form-groups">
                <label class="form-check-label" ></label>
                <input type="checkbox" required="required" /> Remember me

              </div> */}
              <div class="btn-group">
                <div class="left-btn">
                  <button class="btn1 btn btn-primary btn-sm" onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <div class="right-btn">
                <button onClick ={handleSignup} type="submit" class="btn1 btn btn-primary btn-sm">
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