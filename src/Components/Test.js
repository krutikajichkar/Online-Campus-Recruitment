import React from 'react'
import './StudentDashboard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { NavLink } from 'react-router-dom';

function Test() {
  return (
    <div>
      <div className=' test-box'>
        <div className='sidebar'>
          <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
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

        <div className='detail-card'>
          <h1 className='mcq-test'>Multiple Choice Questions (MCQ) </h1>
          <div className='que-box'>
            1) Which methodology is used to performed Maintenance testing?
            <br></br><br></br>
            < div className='radio'>
              <input type='radio'/>&nbsp;&nbsp;Breadth test and depth test
              </div><br></br> 
              < div className='radio'>
              <input type='radio'/>&nbsp;&nbsp;Confirmation testing
              </div> <br></br>
              < div className='radio'>
              <input type='radio'/>&nbsp;&nbsp;Retesting
              </div> <br></br>
              < div className='radio'>
              <input type='radio'/>&nbsp;&nbsp;Sanity testing
              </div> 
              <hr className='que-row'></hr>
          </div>
         <div style={{textAlign:'right', width:'80%'}}><button className=' next-btn '>Next</button></div> 
        </div>

      </div>
    </div>
  )
}

export default Test
