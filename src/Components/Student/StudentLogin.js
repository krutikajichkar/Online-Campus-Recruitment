import React from 'react'

import Login from '../Login/Login';


function StudentLogin() {
    return (
        <Login person='Student' collection="StudentData" path="studentdashboard"/>
    )
}

export default StudentLogin