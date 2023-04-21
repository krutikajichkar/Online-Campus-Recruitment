import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore"
import { db, logOut } from "../../src/Firebase"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import './Sidebar.css';
import { AdminSidebar } from "./SidebarData";
import ContentModal from './ContentModal';


function AddDrive() {
  const [company, setCompany] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState();
  const [last_date_of_registration, setlast_date_of_registration] = useState("2023-2-01")
  const [venue, setVenue] = useState("")
  const [link, setLink] = useState("")
  const [time, settime] = useState()
  const navigate = useNavigate();

  const collectionRef = collection(db, "Drives")
  const dateref = new Date(date);
  const lastDateRef = new Date(last_date_of_registration);
  const addData = async () => {
    await addDoc(collectionRef, {
      company: company,
      description: description,
      reg_date: {
        day: dateref.getDay(),
        month: dateref.toLocaleString("en-us", { month: "short" }),
        year: dateref.getFullYear()
      },
      last_date: {
        day: lastDateRef.getDay(),
        month: lastDateRef.toLocaleString("en-us", { month: "short" }),
        year: lastDateRef.getFullYear()
      },
      venue: venue,
      link: link,
      time: time,
    }).then((response) => {
      alert("Submitted successfully")
      navigate('/admindrive')

    }).catch((err) => {
      alert(err.message)
    })
  }

  const handleSubmit = () => {
    addData();
  }

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

      <div className="detail-card">
        <div style={{width:'100%'}}>
          <h4 style={{ textAlign: "center", fontWeight: "700" }}>
            Create Drives
          </h4>
          <h4 style={{ fontWeight: "600", color: "grey" }}>Basic Details</h4>
          <hr className="drive-row"></hr>
          <h5 className="create-drive">Company Name</h5>
          <TextField
            style={{ width: '80%' }}
            label="Company Name"
            id="fullWidth"
            size="small"
            type="text"
            defaultValue={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <h5 className="create-drive">Description</h5>
          {/* <TextareaAutosize  style={{width:'920px'}} placeholder="Description" aria-lable='empty textarea' id="fullWidth" size="small" type="text" required="required" /> */}
          <TextField
            style={{ width: '80%' }}
            label="Drive Description"
            id="fullWidth"
            size="small"
            type="text"
            maxLength={5}
            defaultValue={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <div className="date-row" >
            <div>
              <h5 className="create-drive">Date</h5>
              <TextField
                style={{ width: "289px" }}
                halfWidth
                id="halfWidth"
                size="small"
                type="date"
                defaultValue={date}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
            <div className="dt">
              <h5 className="create-drive">Time</h5>
              <TextField
                style={{ width: "289px" }}
                halfWidth
                id="halfwidth"
                size="small"
                type="text"
                defaultValue={time}
                onChange={(e) => settime(e.target.value)}
              />
            </div>
            <div className="dt">
              <h5 className="create-drive">Last date to Register</h5>
              <TextField
                style={{ width: "289px" }}
                halfWidth
                id="halfwidth"
                size="small"
                type="date"
                defaultValue={last_date_of_registration}
                onChange={(e) => setlast_date_of_registration(e.target.value)}
              />
            </div>
          </div>
          <h5 className="create-drive">Venue</h5>
          <TextField
            style={{ width: '80%' }}
            label="Venue"
            id="fullWidth"
            size="small"
            type="text"
            defaultValue={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
          <h5 className="create-drive">Registration Link</h5>
          <TextField
            style={{ width: '80%' }}
            label="Registration Link"
            id="fullWidth"
            size="small"
            type="link"
            defaultValue={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <div style={{width:'80%' ,textAlign:'center'}}>
            <button className="btn-primary drive-btn" onClick={handleSubmit}>Submit</button>
          </div>
          <ContentModal/>
        </div>
      </div>
    </div>

  );
}

export default AddDrive;
