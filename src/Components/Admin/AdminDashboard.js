import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut, db } from "../../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "../Sidebar.css";
import { AdminSidebar } from "../SidebarData";
import Loader from "../Loader";

function Admindashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [admin, setadmin] = useState([]);
  const collectionRef = collection(db, "AdminData");
const [loading, setloading] = useState(true)
  

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
        setloading(false)
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
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f2f7e6"  }}>
      <div className="sidebar">
        <ul className="sidebarList">
          {AdminSidebar.map((val, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname == val.link ? "active" : ""}
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
            {admin.map((ele) => {
              return (
                <div key={ele.id} style={{ display: 'flex' }}>
                  <div>
                    <img
                      className="photo"
                      src="https://i.stack.imgur.com/l60Hf.png"
                      alt="admin"
                    />
                  </div>
                  <div className="detail">
                    <h3 style={{ fontWeight: "600" }}>{ele.Name} <span style={{fontSize:'20px', paddingLeft:'10px'}}>(Admin)</span></h3>
                  
                    <div className="main-content">
                      <h4 style={{ fontWeight: "600" }}>Department :</h4>
                      <p className="student-sub-heading">{ele.department}</p>
                    </div>

                    <div className="main-content">
                      <h4 style={{ fontWeight: "600" }}>Address :</h4>
                      <p className="student-sub-heading">{ele.address}</p>
                    </div>
                    <div className="main-content">
                      <h4 style={{ fontWeight: "600" }}>Phone :</h4>
                      <p className="student-sub-heading">{ele.phone}</p>
                    </div>
                    <div className="main-content">
                      <h4 style={{ fontWeight: "600" }}>Email Id :</h4>
                      <p className="student-sub-heading">{ele.email}</p>
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

      export default Admindashboard;
