import React from 'react'
import './Exam.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {NavLink} from 'react-router-dom';


function Exams() {
  return (
    <div>
           <div className='student'>
        <div className='sidebar'>
          <h4 style={{color:'darkcyan'}}>DashBoard</h4>
          <div>
            <NavLink className='link' to='/studentdashboard'> < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/exams'> <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/drives'><HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><ContentPasteSearchIcon /> &nbsp; &nbsp;&nbsp;Test </NavLink>
          </div>
        </div>
       </div>
    </div>
    
  )
}

export default Exams
