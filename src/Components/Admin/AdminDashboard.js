import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut, db } from "../../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "../Sidebar.css";
import { AdminSidebar } from "../SidebarData";

function Admindashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [admin, setadmin] = useState([]);
  const collectionRef = collection(db, "AdminData");
  

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged Out Successfully");
      navigate("/");
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
    <div style={{ display: "flex", height: "100vh", backgroundColor: "cyan" }}>
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

      <div className=" detail-card">
        {admin.map((ele) => {
          return (
            <div className="student-box">
              <div className="photo-detail">
                <div>
                  <img
                    className="photo"
                    src="https://i.stack.imgur.com/l60Hf.png"
                    alt="admin"
                  />
                </div>
                <div className="detail">
                  <h3 style={{ fontWeight: "600" }}>{ele.Name}</h3>
                  <p>Admin</p>
                  <div className="main-content">
                    <h4 style={{fontWeight:"600"}}>Department</h4>
                    <p className="student-sub-heading">{ele.department}</p>
                  </div>

                  <div className="main-content">
                    <h4 style={{fontWeight:"600"}}>Address</h4>
                    <p className="student-sub-heading">{ele.address}</p>
                  </div>
                  <div className="main-content">
                    <h4 style={{fontWeight:"600"}}>Phone</h4>
                    <p className="student-sub-heading">{ele.phone}</p>
                  </div>
                  <div className="main-content">
                    <h4 style={{fontWeight:"600"}}>Email Id</h4>
                    <p className="student-sub-heading">{ele.email}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admindashboard;
