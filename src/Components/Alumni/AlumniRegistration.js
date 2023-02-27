import React from 'react'
import './AlumniRegistration.css';
import { useNavigate, } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AlumniRegistration() {
    const navigate = useNavigate();
    return (
        
        <div id="box">
            <div class="container2">
                <div class="forms">
                    <div class="form-login1">
                        <form action="#">

                            <h2 id="h2">Alumni Registration</h2>
                            <p class="hint-text">
                                Create your account. It's free and only takes a minute.
                            </p>
                            <div class="form-group1">
                                <TextField fullWidth label="Username" id="fullWidth" size="small" type="text" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Email" id="fullWidth" size="small" type="email" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Password" id="fullWidth" size="small" type="password" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Department" id="fullWidth" size="small" type="department" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Session" id="fullWidth" size="small" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Currently Working At" size="small" id="fullWidth" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="LinkedIn Profile" size="small" id="fullWidth" required="required" />
                            </div>
                            <div class="form-group1">
                                <label class="form-check-label" ></label>
                                <input type="checkbox" required="required" /> Remember me
                            </div>

                            <div class="btn-group">
                                <div id="left-btn">
                                    <button class="btn2 btn btn-primary btn-sm" onClick={() => navigate(-1)}>Go Back</button>
                                </div>
                                <div id="right-btn">
                                    <button type="submit" class="btn2 btn btn-primary btn-sm">
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

export default AlumniRegistration