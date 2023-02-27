import React from 'react'
import './StudentDashboard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import { Link, NavLink } from "react-router-dom";

function StudentDashboard() {
  return (
    <div>
      {/* <div className='bar'>
      <Link to='/'> <ArrowBackIcon /></Link>
      </div> */}
      <div className='student'>
        <div className='sidebar'>
          <h4 style={{color:'darkcyan'}}>DashBoard</h4>
          <div>
           <NavLink className='link' to=''> < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details </NavLink>
          </div>
          <div>
          <NavLink className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar</NavLink> 
          </div>
          <div>
           <NavLink  className='link' to='/exams'> <ContentPasteIcon/> &nbsp; &nbsp;&nbsp;Exams </NavLink>
          </div>
          <div>
           <NavLink className='link' to='/studentdrive'><HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives </NavLink> 
          </div>
          <div>
            <NavLink className='link' to='/test'><ContentPasteSearchIcon /> &nbsp; &nbsp;&nbsp;Test </NavLink> 
          </div>
          <div>
            <NavLink className='link' to='/test'><EqualizerOutlinedIcon/> &nbsp; &nbsp;&nbsp;Progress </NavLink> 
          </div>
        </div>

        <div className=' detail-card'>
          <div className='student-box' >
            <div className='photo-detail'>
              <div >
              <img className='photo' src="https://i.pinimg.com/236x/c5/3a/a6/c53aa684465bc61455fd0d21537752fb.jpg" alt='student' />
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
            < div className='profile'>
              <button className='btn-primary  profile-btn'>Edit Profile</button>
              <button className='btn-primary  profile-btn'>Complete your Profile</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentDashboard
