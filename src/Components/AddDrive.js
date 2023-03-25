import React ,{useState}from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import {addDoc,collection} from "firebase/firestore"
import {db} from "../../src/Firebase"


function AddDrive() {
  const [company, setCompany] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState();
  const [last_date_of_registration, setlast_date_of_registration] = useState("2023-2-01")
  const [venue, setVenue] = useState("")
  const [link, setLink] = useState("")
  const [time, settime] = useState()

  const collectionRef = collection(db,"Drives")
  const dateref = new Date(date);
  const lastDateRef = new Date(last_date_of_registration);
 const addData = async () => {
  await addDoc(collectionRef,{
    company:company,
    description:description,
    reg_date:{
      day:dateref.getDay(),
      month: dateref.toLocaleString("en-us", {month: "short"}),
      year:dateref.getFullYear()
    },
    last_date : {
      day:lastDateRef.getDay(),
      month: lastDateRef.toLocaleString("en-us", {month: "short"}),
      year:lastDateRef.getFullYear()
    },
    venue:venue,
    link:link,
    time:time,
  }).then((response) => {
    alert("Submitted successfully")
    
  }).catch((err) => {
    alert(err.message)
  })
 }

 const handleSubmit = () => {
  addData();
 }


  return (
    <div>
      <div className="student">
        <div className="sidebar">
          <h4 style={{ color: "darkcyan" }}>DashBoard</h4>
          <div>
            <NavLink className="link" to="/adddrive">
              {" "}
              <HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Manage Drives{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/test">
              <PersonSearchOutlinedIcon /> &nbsp; &nbsp;&nbsp;Search Students
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/exams">
              {" "}
              <BadgeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Batches
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/drives">
              <AccountTreeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Departments{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/test">
              <AssignmentOutlinedIcon /> &nbsp; &nbsp;&nbsp;Manage Exams
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/test">
              <AccessTimeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Manage Trainings
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/fullCalender">
              <CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calender
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/test">
              <SettingsOutlinedIcon /> &nbsp; &nbsp;&nbsp;Settings
            </NavLink>
          </div>
        </div>

        <div className="drive-card">
          <div>
            <h4 style={{ textAlign: "center", fontWeight: "700" }}>
              Create Drives
            </h4>
            <h4 style={{ fontWeight: "600", color: "grey" }}>Basic Details</h4>
            <hr className="drive-row"></hr>
            <h5 className="create-drive">Company Name</h5>
            <TextField
              fullWidth
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
              fullWidth
              label="Drive Description"
              id="fullWidth"
              size="small"
              type="text"
              maxLength={5}
             defaultValue={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <div className="date-row">
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
              fullWidth
              label="Venue"
              id="fullWidth"
              size="small"
              type="text"
             defaultValue={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
            <h5 className="create-drive">Registration Link</h5>
            <TextField
              fullWidth
              label="Registration Link"
              id="fullWidth"
              size="small"
              type="link"
             defaultValue={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <center>
              <button className="btn-primary drive-btn" onClick={handleSubmit}>Submit</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDrive;
