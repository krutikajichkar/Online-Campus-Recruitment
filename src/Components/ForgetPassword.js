import React from 'react'
import './ForgetPass.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import { PropaneSharp } from '@mui/icons-material';

function ForgetPassword(props) {
    return (
        <div id="box">
            <div class="container_f">
                <div id="form1">
                    <div class="form-login">
                        <form action="#">
                            <h2 id="forget_name">{props.person} Forget Password</h2>
                            <div class="form-group1">
                                <div class="input-group1">
                                    <TextField
                                        label="Email"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'right' }}>
                                <button style={{ borderRadius: '20px', width: '100px', fontWeight: '400' }} type="submit" class=" btn btn-primary ">
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

export default ForgetPassword