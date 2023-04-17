import React, { useEffect, useState } from "react";
import "../Admin/AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { db, logOut, useAuth } from "../../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "../Sidebar.css";
import { SidebarData } from "../SidebarData";
import Loader from "../Loader";

function StudentDashboard() {
  const collectionRef = collection(db, "StudentData");
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [getuid, setgetuid] = useState();
  const auth = getAuth();
  const [loading, setloading] = useState(true)

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

        setloading(false)
        
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
      if (window.confirm("Do you really want to Log Out?") === true) {
        await logOut();
        alert("Logged Out Successfully");
        navigate("/");
      } else {
        navigate("/studentdashboard");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f2f7e6" }}>
      <div className="sidebar">
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                className="sidebar-row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
          <li className="sidebar-row" to="/" onClick={handleLogout}>
            <div id="icon">
              {" "}
              <ExitToAppOutlinedIcon />{" "}
            </div>
            <div id="title"> Logout</div>
          </li>
        </ul>
      </div>
      {loading && <Loader/>}

      {!loading && <div className=" detail-card">
        <div className="student-box">
          <div className="photo-detail">
            {student.map((item) => {
              return (
                <div key={item.id} style={{display:'flex'}}>
                  <div>
                    <img
                      className="photo"
                      src="https://i.pinimg.com/236x/c5/3a/a6/c53aa684465bc61455fd0d21537752fb.jpg"
                      alt="student"
                    />
                  </div>
                  <div className="detail">
                    <h3 style={{ fontWeight: "600" }}>{item.Name} <span style={{fontSize:'20px', paddingLeft:'10px'}}>(Student)</span></h3>
                  
                    <div className="main-content">
                      <p className="student-heading">Department :</p>
                      <p className="student-sub-heading">{item.department}</p>
                    </div>
                    <div className="main-content">
                      <p className="student-heading">Roll Number :</p>
                      <p className="student-sub-heading">{item.roll_no}</p>
                    </div>
                    <div className="main-content">
                      <p className="student-heading">Address :</p>
                      <p className="student-sub-heading">{item.address}</p>
                    </div>
                    <div className="main-content">
                      <p className="student-heading">Phone :</p>
                      <p className="student-sub-heading">{item.phone}</p>
                    </div>
                    <div className="main-content">
                      <p className="student-heading">Email Id :</p>
                      <p className="student-sub-heading">{item.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>}
    </div>

  );
}

export default StudentDashboard;
