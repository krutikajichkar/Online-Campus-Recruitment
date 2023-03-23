import React from 'react'
import './StudentDashboard.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NavLink, Link } from 'react-router-dom';

function StudentDrive() {
    return (
        <div>
            <div className='student'>
                <div className='sidebar'>
                    <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
                    <div>
                        <NavLink className='link' to='/studentdrive'><HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Placements</NavLink>
                    </div>
                    <div>
                        <NavLink className='link' to='/studentdashboard'> < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details </NavLink>
                    </div>
                    <div>
                        <NavLink className='link' to='/studentdashboard'><AccountTreeOutlinedIcon /> &nbsp; &nbsp;&nbsp;Departments </NavLink>
                    </div>
                    <div>
                        <NavLink className='link' to='/exams'> <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams </NavLink>
                    </div>
                    <div>
                        <NavLink className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calender</NavLink>
                    </div>
                    <div>
                        <NavLink className='link' to='/fullCalender'><CloudUploadIcon /> &nbsp;&nbsp;&nbsp;&nbsp;File upload</NavLink>
                    </div>
                </div>

                <div >
                    <div className='stdrive-bar'>
                        <h5 className='stdrive-head'>Active upcoming placement drives</h5>
                    </div>
                    <div className='stdrive-card'>
                        <Card sx={{ maxWidth: 432, margin: '0px 13px 0px 0px', boxShadow: '0px 2px 2px 2px gainsboro' }}>
                            <button className='active-btn'>Active</button>
                            <button className='active-btn'>Register</button>
                            <CardContent>
                                <Typography variant="h6" style={{ margin: '8px 0px', fontWeight: 'bold' }}>
                                    Tata Consultancy Service
                                </Typography>
                                <Typography variant="h10" style={{ margin: '8px 0px', fontWeight: 'bold', color:' rgb(137, 246, 21)' }}>
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
                            <button className='active-btn'>Register</button>
                            <CardContent>
                                <Typography variant="h6" style={{ margin: '8px 0px', fontWeight: 'bold'}}>
                                    Infosys
                                </Typography>
                                <Typography variant="h10" style={{ margin: '8px 0px', fontWeight: 'bold' , color:' rgb(137, 246, 21)' }}>
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

            </div>
        </div>
    )
}

export default StudentDrive
