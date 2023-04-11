import React, { useState, useEffect } from 'react'
import '../Student/StudentDashboard.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut, db } from '../../Firebase';
import { getDocs, collection } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Sidebar from "../Sidebar";
import { AdminSidebar } from '../SidebarData';

function HodDashboard() {
  const navigate = useNavigate();
  const collectionRef = collection(db, "HODdata")
  const auth = getAuth()
  const [hod, sethod] = useState([])
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
        sethod(
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
    <div className="dashboard">
      <div className='sidebar'>
        <ul className="sidebarList">
          {AdminSidebar.map((val, key) => {
            return (
              <li key={key} id={window.location.pathname == val.link ? "active" : ""} className='sidebar-row' onClick={() => { window.location.pathname = val.link }}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            )
          })}
          <li className='sidebar-row' to='/' onClick={handleLogout}>
            <div id="icon"> <ExitToAppOutlinedIcon /> </div>
            <div id="title">   Logout</div>
          </li>
        </ul>
      </div>

      <div className=' detail-card'>
        <div className='student-box' >
          {
            hod.map((ele) => {
              return (
                <div className='photo-detail'>
                  <div className='photo'>
                    <img className='photo' src="https://i.stack.imgur.com/l60Hf.png" alt='admin' />
                  </div>
                  <div className='detail'>
                    <h3 style={{ fontWeight: '600' }}>{ele.Name}</h3>
                    <p>HOD</p>
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
          <div className='profile'>
            <button className='btn-primary  profile-btn'>Edit Profile</button>
            <button className='btn-primary profile-btn'>Complete your Profile</button>
            <button className='btn-primary  profile-btn' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default HodDashboard