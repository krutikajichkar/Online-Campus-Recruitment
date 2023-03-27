import React, { useState, useEffect } from 'react'
import './AdminDashboard.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut, db } from '../../Firebase';
import { getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Admindashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [admin, setadmin] = useState([])
  const collectionRef = collection(db, "AdminData");
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

  const getData = async (uid) => {
    await getDocs(collectionRef)
      .then((response) => {
        setadmin(
          response.docs
            .filter((item) => {
              return item.data().userId === uid;
            })
            .map((item) => {
              return { ...item.data(), id: item.id };
            })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //setgetuid(user.uid);
        getData(user.uid);
      }
    });
  }, []);

  return (
    <div>
      {/* <div className='bar'>
        <Link to='/'> <ArrowBackIcon /></Link>
      </div> */}
      <div className='student'>
      <div className='mobile'>
            <MenuIcon className='menuicon' />
          </div>
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
            {
              admin.map((ele) => {
                return (
                  <div className='photo-detail'>
                    <div >
                      <img className='photo' src="https://i.stack.imgur.com/l60Hf.png" alt='admin' />
                    </div>
                    <div className='detail'>
                      <h3 style={{ fontWeight: '600' }}>{ele.Name}</h3>
                      <p>Admin</p>
                      <div className='main-content'>
                        <p className='student-heading'>Department</p>
                        <p className='student-sub-heading'>{ele.department}</p>
                      </div>

                      <div className='main-content'>
                        <p className='student-heading'>Address</p>
                        <p className='student-sub-heading'>{ele.address}</p>
                      </div>
                      <div className='main-content'>
                        <p className='student-heading'>Phone</p>
                        <p className='student-sub-heading'>{ele.phone}</p>
                      </div>
                      <div className='main-content'>
                        <p className='student-heading'>Email Id</p>
                        <p className='student-sub-heading'>{ele.email}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            < div className='profile'>
              <button className='btn-primary  profile-btn'>Edit Profile</button>
              <button className='btn-primary  profile-btn'>Complete your Profile</button>
              <button className='btn-primary  profile-btn' onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Admindashboard
