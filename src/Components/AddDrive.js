import React from 'react'
import './StudentDashboard.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';

function AddDrive() {
  return (
    <div>
      <div className='student'>
        <div className='sidebar'>
          <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
          <div>
            <NavLink className='link' to='/adddrive'> <HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Manage Drives </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><PersonSearchOutlinedIcon /> &nbsp; &nbsp;&nbsp;Search Students</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/exams'> <BadgeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Batches</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/drives'><AccountTreeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Departments </NavLink>
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
          <div >
            <h4 style={{ textAlign: "center", fontWeight: '700' }}>Create Drives</h4>
            <h4 style={{ fontWeight: '600', color:'grey' }}>Basic Details</h4>
            <hr className='drive-row'></hr>
            <h5 className='create-drive'>Company Name</h5>
            <TextField fullWidth label="Company Name" id="fullWidth" size="small" type="text" />
            <h5 className='create-drive'>Description</h5>
            {/* <TextareaAutosize  style={{width:'920px'}} placeholder="Description" aria-lable='empty textarea' id="fullWidth" size="small" type="text" required="required" /> */}
            <TextField fullWidth label="Drive Description" id="fullWidth" size="small" type="text" maxLength={5} />
            <div className='date-row'>
              <div >
                <h5 className='create-drive'>Date</h5>
                <TextField style={{ width: '289px' }} halfWidth id="halfWidth" size="small" type="date" />
              </div>
              <div className='dt'>
                <h5 className='create-drive'>Time</h5>
                <TextField style={{ width: '289px' }} halfWidth  id="halfWidth" size="small" type="time" />
              </div>
              <div className='dt'>
                <h5 className='create-drive'>Last date to Register</h5>
                <TextField style={{ width: '289px' }} halfWidth id="halfWidth" size="small" type="date" />
              </div>
            </div>
            <h5 className='create-drive'>Venue</h5>
            <TextField fullWidth label="Venue" id="fullWidth" size="small" type="text" />
            <h5 className='create-drive'>Registration Link</h5>
            <TextField fullWidth label="Registration Link" id="fullWidth" size="small" type="link" />
          <center><button className='btn-primary drive-btn'>Submit</button></center>  
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AddDrive
