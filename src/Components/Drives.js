import React from 'react';
import './StudentDashboard.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { NavLink,Link } from 'react-router-dom';


function Drives() {
  return (
    <div>
      <div className='bar'>
        <Link to='/'> <ArrowBackIcon /></Link>
      </div>
      <div className='student'>
        <div className='sidebar'>
          <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
          <div>
            <NavLink className='link' to='/drives'> <HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Manage Drives </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><PersonSearchOutlinedIcon /> &nbsp; &nbsp;&nbsp;Search Students</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/exams'> <BadgeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Batches</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/studentdashboard'><AccountTreeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Departments </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><AssignmentOutlinedIcon /> &nbsp; &nbsp;&nbsp;Manage Exams</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><AccessTimeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Manage Trainings</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calender</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><SettingsOutlinedIcon /> &nbsp; &nbsp;&nbsp;Settings</NavLink>
          </div>
        </div>

        <div className='drive-card'>
       <div style={{position:'absolute',right:'120px',top:'100px'}}> <Link className='link' to='/adddrive'><button className='btn-primary btn'>Add Drive</button></Link></div>
        </div>

      </div>
    </div>
  )
}

export default Drives
