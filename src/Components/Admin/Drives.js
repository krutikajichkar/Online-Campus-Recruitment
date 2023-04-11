import React from 'react';
import '../HOD/Drives.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { logOut, db } from '../../Firebase';
import { useNavigate, Link } from 'react-router-dom';
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
// import  "../Sidebar.css";
import { AdminSidebar } from '../SidebarData';



function Drives() {
  const navigate = useNavigate();

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

      <div >
        <div className='stdrive-bar'>
          <h5 className='stdrive-head'>Active upcoming placement drives</h5>
        </div>
        <div className='stdrive-card'>
          <Card sx={{ maxWidth: 432, margin: '0px 13px 0px 0px', boxShadow: '0px 2px 2px 2px gainsboro' }}>
            <button className='active-btn'>Active</button>

            <CardContent>
              <Typography variant="h6" style={{ margin: '8px 0px', fontWeight: 'bold' }}>
                Tata Consultancy Service
              </Typography>
              <Typography variant="h10" style={{ margin: '8px 0px', fontWeight: 'bold', color: ' rgb(137, 246, 21)' }}>
                Mumbai India
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ padding: '10px 0px' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <div className='dtv-btn'>
              <div>
                <h5>Date</h5>
                <div>29 Jan 2023</div>
              </div>
              <div>
                <h5>Time</h5>
                <div>9 AM</div>
              </div>
              <div>
                <h5>Venue</h5>
                <div>TGPCET, Nagpur</div>
              </div>
            </div>
          </Card>

          <Card sx={{ maxWidth: 432, margin: '0px 0px 0px 13px', boxShadow: '0px 2px 2px 2px gainsboro' }}>
            <button className='active-btn'>Active</button>

            <CardContent>
              <Typography variant="h6" style={{ margin: '8px 0px', fontWeight: 'bold' }}>
                Infosys
              </Typography>
              <Typography variant="h10" style={{ margin: '8px 0px', fontWeight: 'bold', color: ' rgb(137, 246, 21)' }}>
                Bangalore India
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ padding: '10px 0px' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <div className='dtv-btn'>
              <div>
                <h5>Date</h5>
                <div>29 Jan 2023</div>
              </div>
              <div>
                <h5>Time</h5>
                <div>9 AM</div>
              </div>
              <div>
                <h5>Venue</h5>
                <div>TGPCET, Nagpur</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div >
        <div style={{ margin: '40px 20px' }}> <Link className='link' to='/adddrive'><button className='btn-primary btn' style={{ padding: '10px 20px' }}>ADD DRIVE</button></Link></div>
      </div>

    </div>

  )
}

export default Drives
