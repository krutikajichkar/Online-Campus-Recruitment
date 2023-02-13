import React from 'react'
import './AlumniRegistration.css';
import { useNavigate, } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AlumniRegistration() {
    const navigate = useNavigate();
    return (
        // <div class="signupback">
        //     <div class="signup-form">
        //         <form action="/examples/actions/confirmation.php" method="post">
        //             <h2>Alumni Registration</h2>
        //             <p class="hint-text">
        //                 Create your account. It's free and only takes a minute.
        //             </p>
        //             <div class="form-group">
        //                 <TextField fullWidth label="Username" id="fullWidth" type="text" required="required" />
        //             </div>
        //             <div class="form-group">
        //                 <TextField fullWidth label="Email" id="fullWidth" type="email" required="required" />
        //             </div>
        //             <div class="form-group">
        //                 <TextField fullWidth label="Password" id="fullWidth" type="password" required="required" />
        //             </div>
        //             <div class="form-group">
        //                 <TextField fullWidth label="Department" id="fullWidth" type="department" required="required" />
        //             </div>
        //             <div class="form-group">
        //                 <TextField fullWidth label="Session" id="fullWidth" required="required" />
        //             </div>
        //             <div class="form-group">
        //                 <TextField fullWidth label="Currently Working At" id="fullWidth" required="required" />
        //             </div>
        //             <div class="form-group">
        //                 <TextField fullWidth label="LinkedIn Profile" id="fullWidth" required="required" />
        //             </div>

        //             <div class="form-group">
        //                 <label class="form-check-label" ></label>
        //                 <input type="checkbox" required="required" /> Remember me

        //             </div>
        //             <div class="form-group">
        //                 <button type="submit" class="btn btn-success btn-lg btn-block">
        //                     Register Now
        //                 </button>
        //                 <div class="btnback">
        //                     <button class="backbtn" onClick={() => navigate(-1)}>Go Back</button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>


        <div id="box">
            <div class="container2">
                <div class="forms">
                    <div class="form-login1">
                        <form action="#">

                            <h2>Alumni Registration</h2>
                            <p class="hint-text">
                                Create your account. It's free and only takes a minute.
                            </p>
                            <div class="form-group1">
                                <TextField fullWidth label="Username" id="fullWidth" type="text" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Email" id="fullWidth" type="email" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Password" id="fullWidth" type="password" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Department" id="fullWidth" type="department" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Session" id="fullWidth" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="Currently Working At" id="fullWidth" required="required" />
                            </div>
                            <div class="form-group1">
                                <TextField fullWidth label="LinkedIn Profile" id="fullWidth" required="required" />
                            </div>
                            <div class="form-group1">
                                <label class="form-check-label" ></label>
                                <input type="checkbox" required="required" /> Remember me
                            </div>

                            <div class="form-group1">
                                <button type="submit" class="btn2 btn-success btn-lg btn-block">
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

export default AlumniRegistration