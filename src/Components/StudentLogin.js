import React from 'react'
import './Login.css';


import Login from './Login';
import { TextField } from '@mui/material';

function StudentLogin() {
    return (
        <Login person='Student' />
    )
}

export default StudentLogin