import React ,{useEffect, useState} from 'react';
import './Drives.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { logOut, db } from '../../Firebase';
import { useNavigate, Link } from 'react-router-dom';
import { getDocs, collection } from "firebase/firestore";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
// import  "../Sidebar.css";
import { AdminSidebar } from '../SidebarData';



function Drives() {
  const navigate = useNavigate();
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


  const handleLogout = async () => {

    try {
      await logOut();
      alert("Logged Out Successfully");
      navigate('/');
    }
    catch (error) {
      alert(error.message)
    }
  };

  return (
    <div>

      <div className='sidebar'>
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

      <div className='detail-card'>
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

      <div >
        <div style={{ margin: '40px 20px' }}> <Link className='link' to='/adddrive'><button className='btn-primary btn' style={{ padding: '10px 20px' }}>ADD DRIVE</button></Link></div>
      </div>

    </div>

  )
}

export default Drives
