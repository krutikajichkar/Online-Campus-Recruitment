import React from 'react'
import './ForgetPass.css';
import TextField from '@mui/material/TextField';

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
                                    <TextField style={{ width: '400px' }}
                                        label="Email"
                                        id="outlined-size-small"
                                        size="small"
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'right' }}>
                                <button style={{ borderRadius: '20px', width: '100px', fontWeight: '600' }} type="submit" class=" btn btn-primary ">
                                    Verify
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