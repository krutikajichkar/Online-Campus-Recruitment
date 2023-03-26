import React, { useEffect, useState } from "react";
import "./StudentDashboard.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { NavLink, useNavigate } from "react-router-dom";
import { db, logOut, useAuth } from "../../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function StudentDashboard() {
  const collectionRef = collection(db, "StudentData");
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [getuid, setgetuid] = useState();
  const auth = getAuth();
  

  const getData = async (uid) => {
    await getDocs(collectionRef)
      .then((response) => {
        setStudent(
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
        setgetuid(user.uid);
        getData(user.uid);
      }
    });
  }, []);

 
  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged Out Successfully");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      {/* <div className='bar'>
      <Link to='/'> <ArrowBackIcon /></Link>
      </div>  */}
      <div className="student">
        <div className="sidebar">
          <h4 style={{ color: "darkcyan" }}>DashBoard</h4>
          <div>
            <NavLink className="link" to="">
              {" "}
              <PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/fullCalender">
              <CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/exams">
              {" "}
              <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/studentdrive">
              <HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/test">
              <ContentPasteSearchIcon /> &nbsp; &nbsp;&nbsp;Test{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/test">
              <EqualizerOutlinedIcon /> &nbsp; &nbsp;&nbsp;Progress{" "}
            </NavLink>
          </div>
          <div>
           <NavLink  className='link' to='/' onClick={handleLogout}> < ExitToAppOutlinedIcon/> &nbsp; &nbsp;&nbsp;Logout </NavLink>
          </div>
        </div>
 <div className="mobile">
  
 </div>
        <div className=" detail-card">
          <div className="student-box">
            <div className="photo-detail">
              {student.map((item) => {
                return (
                  <>
                    <div>
                      <img
                        className="photo"
                        src="https://i.pinimg.com/236x/c5/3a/a6/c53aa684465bc61455fd0d21537752fb.jpg"
                        alt="student"
                      />
                    </div>
                    <div className="detail">
                      <h3 style={{ fontWeight: "600" }}>{item.Name}</h3>
                      <p>student</p>
                      <div className="main-content">
                        <p className="student-heading">Department</p>
                        <p className="student-sub-heading">{item.department}</p>
                      </div>
                      <div className="main-content">
                        <p className="student-heading">Roll Number</p>
                        <p className="student-sub-heading">{item.roll_no}</p>
                      </div>
                      <div className="main-content">
                        <p className="student-heading">Address</p>
                        <p className="student-sub-heading">{item.address}</p>
                      </div>
                      <div className="main-content">
                        <p className="student-heading">Phone</p>
                        <p className="student-sub-heading">{item.phone}</p>
                      </div>
                      <div className="main-content">
                        <p className="student-heading">Email Id</p>
                        <p className="student-sub-heading">{item.email}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="profile">
              <button className="btn-primary  profile-btn">Edit Profile</button>
              <button className="btn-primary  profile-btn">
                Complete your Profile
              </button>
              <button
                className="btn-primary  profile-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
