import React, { useEffect, useState } from "react";
import "./StudentDashboard.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase";


function StudentDrive() {
  const [drive, setdrive] = useState([]);
  const collectionRef = collection(db, "Drives");

  const getData = async () => {
    await getDocs(collectionRef).then((response) => {
      setdrive(
        response.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="student">
        <div className="sidebar">
          <h4 style={{ color: "darkcyan" }}>DashBoard</h4>
          <div>
            <NavLink className="link" to="/studentdrive">
              <HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Placements
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/studentdashboard">
              {" "}
              <PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/studentdashboard">
              <AccountTreeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Departments{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/exams">
              {" "}
              <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams{" "}
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/fullCalender">
              <CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calender
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/fullCalender">
              <CloudUploadIcon /> &nbsp;&nbsp;&nbsp;&nbsp;File upload
            </NavLink>
          </div>
        </div>

        <div>
          <div className="stdrive-bar">
            <h5 className="stdrive-head">Active upcoming placement drives</h5>
          </div>
          <div className="stdrive-card">
            {drive.map((ele) => {
              return (
                <Card
                  sx={{
                    maxWidth: 432,
                    margin: "0px 13px 0px 0px",
                    boxShadow: "0px 2px 2px 2px gainsboro",
                  }}
                  key={ele.id}
                >
                  <button className="active-btn">Active</button>

                  <CardContent>
                    <Typography
                      variant="h6"
                      style={{ margin: "8px 0px", fontWeight: "bold" }}
                    >
                      {ele.company}
                    </Typography>
                    <Typography
                      variant="h10"
                      style={{
                        margin: "8px 0px",
                        fontWeight: "bold",
                        color: " rgb(137, 246, 21)",
                      }}
                    >
                      {ele.location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ padding: "10px 0px" }}
                    >
                      {ele.description}
                    </Typography>
                  </CardContent>
                  <div className="dtv-btn">
                    <div>
                      <h5>Date</h5>
                      <p>
                        {ele.reg_date.day} {ele.reg_date.month}{" "}
                        {ele.reg_date.year}
                      </p>
                    </div>
                    <div>
                      <h5>Time</h5>
                      <p>{ele.time}</p>
                    </div>
                    <div>
                      <h5>Venue</h5>
                      <p>{ele.venue}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDrive;
