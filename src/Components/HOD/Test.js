import React from 'react'
import './StudentDashboard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <div>
      <div className=' test-box'>
        <div className='sidebar'>
          <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
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

        <div className='detail-card'>
          <h1 className='mcq-test'>Multiple Choice Questions (MCQ) </h1>
          <div className='que-box'>
            1) Which methodology is used to performed Maintenance testing?
            <br></br>
            a. Breadth test and depth test<br></br>
            b. Confirmation testing <br></br>
            C. Retesting <br></br>
            d. Sanity testing
            <div>
              <button className='btn-success  show-btn'>Show Answer</button>
            </div>
          </div>
          <div className='que-box'>
            2)The Regression test case is not a --------?
            <br></br>
            a. Tests that focus on the software components, which have been modified.<br></br>
            b. Low-level components are combined into clusters, which perform a specific software sub-function.<br></br>
            c. Additional tests that emphasize software functions, which are likely to be affected by the change.<br></br>
            d. A representative sample of tests, which will exercise all software functions.
            <div>
              <button className='btn-success  show-btn'>Show Answer</button>
            </div>
          </div>
          <div className='que-box'>
            3) Generally, which testing is used when shrink-wrapped software products are being established and part of an integration testing?
            <br></br>
            a. Integration Testing<br></br>
            b. Validation testing<br></br>
            c. Regression Testing<br></br>
            d. Smoke testing
            <div>
              <button className='btn-success show-btn'>Show Answer</button>
            </div>
          </div>
          <button className='btn-success next-btn '>Next</button>
        </div>

      </div>
    </div>
  )
}

export default Test
