import React from 'react'
import './AdminDashboard.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut } from '../../Firebase';


function Admindashboard() {
  const navigate = useNavigate();
  const handleLogout = async () => {

    try {
      await logOut();
      alert("Logged Out Successfully");
      navigate('/');
    }
    catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <div className='bar'>
        <Link to='/'> <ArrowBackIcon /></Link>
      </div>
      <div className='student'>
        <div className='sidebar'>
          <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
          <div>
            <NavLink className='link' to=''> < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Admin Details </NavLink>
          </div>
          {/* <div>
            <NavLink className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar</NavLink>
          </div> */}
          <div>
            <NavLink className='link' to='/exams'> <EditOutlinedIcon /> &nbsp; &nbsp;&nbsp;Edit Profile</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/drives'><HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives </NavLink>
          </div>
          {/* <div>
            <NavLink className='link' to='/test'><ContentPasteSearchIcon /> &nbsp; &nbsp;&nbsp;Test </NavLink>
          </div> */}
          <div>
            <NavLink className='link' to='/' onClick={handleLogout}> <ExitToAppOutlinedIcon /> &nbsp; &nbsp;&nbsp;Logout</NavLink>
          </div>
        </div>

        <div className=' detail-card'>
          <div className='student-box' >
            <div className='photo-detail'>
              <div >
                <img className='photo' src="https://i.stack.imgur.com/l60Hf.png" alt='admin' />
              </div>
              <div className='detail'>
                <h3 style={{ fontWeight: '600' }}>AJAY  SHRIVASTAV <span style={{fontSize:"20px", fontWeight:'400' , marginLeft:'10px'}}>(Admin)</span></h3>
                <br></br>
                <div className='main-content'>
                  <p className='student-heading'>Department</p>
                  <p className='student-sub-heading'>Information Technology</p>
                </div>
                <div className='main-content'>
                  <p className='student-heading'>Admin Id</p>
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
          </div>
        </div>

      </div>
    </div>
  )
}

export default Admindashboard
