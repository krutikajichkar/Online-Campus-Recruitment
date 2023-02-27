import React from 'react'
import './StudentDashboard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {Link} from 'react-router-dom';


function Drives() {
  return (
    <div>
     <div className='student'>
        <div className='sidebar'>
          <h4 style={{color:'darkcyan'}}>DashBoard</h4>
          <div>
            <Link className='link' to='/studentdashboard'> < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details </Link>
          </div>
          <div>
            <Link className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar</Link>
          </div>
          <div>
            <Link className='link' to='/exams'> <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams </Link>
          </div>
          <div>
            <Link className='link' to='/drives'><HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives </Link>
          </div>
          <div>
            <Link className='link' to='/test'><ContentPasteSearchIcon /> &nbsp; &nbsp;&nbsp;Test </Link>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Drives
