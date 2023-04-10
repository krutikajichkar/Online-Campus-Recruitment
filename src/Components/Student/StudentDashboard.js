import React, { useEffect, useState } from "react";
import "./StudentDashboard.css";
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
     
      if( window.confirm("Do you really want to Log Out?")===true){
        await logOut();
        alert("Logged Out Successfully");
        navigate("/");
      }
      else{
        navigate('/studentdashboard')
      }
     
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div >
      
      <div className=" detail-card" style={{display:"block"}}>
          <div className="student-box">
            <div className="photo-detail">
              {student.map((item) => {
                return (
                  <div key={item.id}>
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
                  </div>
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
      
     
    
  );
}

export default StudentDashboard;
