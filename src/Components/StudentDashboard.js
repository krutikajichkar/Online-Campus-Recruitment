import React from 'react'
import './StudentDashboard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from "react-router-dom";
function StudentDashboard() {
  return (
    <div>
      <div className='bar'>
      <Link to='/'> <ArrowBackIcon /></Link>
      </div>
      <div className='student'>
        <div className='sidebar'>
          <h4>DashBoard</h4>
          <div>
            < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details
          </div>
          <div>
            <CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar
          </div>
          <div>
            <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams
          </div>
          <div>
            <HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives
          </div>
        </div>

        <div className=' detail-card'>
          <div className='student-box' >
            <div className='photo-detail'>
              <div className='photo'>
                <img src="https://i.pinimg.com/236x/c5/3a/a6/c53aa684465bc61455fd0d21537752fb.jpg" alt='student' />
              </div>
              <div className='detail'>
                <h3 style={{ fontWeight: '600' }}>AJAY  SHRIVASTAV</h3>
                <p>student</p>
                <div className='main-content'>
                  <p className='student-heading'>Department</p>
                  <p className='student-sub-heading'>Information Technology</p>
                </div>
                <div className='main-content'>
                  <p className='student-heading'>Roll Number</p>
                  <p className='student-sub-heading'>08</p>
                </div>
                <div className='main-content'>
                  <p className='student-heading'>Address</p>
                  <p className='student-sub-heading'>Naik Nager, Manevada Road, Nagpur 441108</p>
                </div>
                <div className='main-content'>
                  <p className='student-heading'>Phone</p>
                  <p className='student-sub-heading'>9822457732</p>
                </div>
                <div className='main-content'>
                  <p className='student-heading'>Email Id</p>
                  <p className='student-sub-heading'>ajayshrivastav@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='profile'>
              <h6 className='profile-head'>PROFILE</h6>
              <button className='btn-primary btn profile-btn'>Edit Profile</button>
            </div>
            <div className='profile'>
              <h6 className='profile-head'>PROFILE</h6>
              <button className='btn-primary btn profile-btn'>Complete your Profile</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentDashboard
