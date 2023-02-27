
import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdbIcon from '@mui/icons-material/Adb';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CellTowerIcon from '@mui/icons-material/CellTower';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import './Home.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
// import { color } from '@mui/system';


function Home() {
  return (
    < div id='main-div'>
      <Header />
      <Navbar />

      <img style={{ height: '560px', width: '100%', marginTop: '150px' }} src='http://tgpcet.com/assets/img/banner/19.jpg' alt="..." />

      <div>
        <center>  <h3 className='heading'> PROGRAMS @ TGPCET</h3>
          <p className='underline'></p>

          <div className='row'>
            <div className='card1 '>
              <WifiIcon style={{ color: 'rgb(237, 20, 183)' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>INFORMATION TECHNOLOGY</h6>
                <p > Intake <span className='vertical-line'>| </span> 60</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415124610</p>
              </div>
            </div>
            <div className='card2'>
              <ImportantDevicesIcon style={{ color: 'rgb(19, 222, 222)' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>MASTER IN COMPUTER APPLICATION</h6>
                <p > Intake <span className='vertical-line'>| </span>120</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415124110</p>
              </div>
            </div>
            <div className='card3'>
              <ApartmentIcon color='primary' sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>CIVIL ENGINEERING</h6>
                <p > Intake <span className='vertical-line'>| </span>120</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415119110</p>
              </div>
            </div>
            <div className='card4'>
              <AdbIcon style={{ color: 'rgb(6, 180, 6)' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>COMPUTER SCIENCE AND ENGINEERING</h6>
                <p > Intake <span className='vertical-line'>| </span> 120</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415124210</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='card5'>
              <EngineeringIcon color='primary' sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>MECHANICAL ENGINEERING</h6>
                <p > Intake <span className='vertical-line'>| </span> 120</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415161210</p>
              </div>
            </div>
            <div className='card6'>
              <CellTowerIcon style={{ color: 'orange' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>ELECTRONICS & COMMUNICATION ENGINEERING</h6>
                <p > Intake <span className='vertical-line'>| </span> 60</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415137010</p>
              </div>
            </div>
            <div className='card7'>
              <ViewDayIcon style={{ color: "rgb(19, 222, 222)" }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>COMPUTER SCIENCE AND ENGINEERING (DATA SCIENCE)</h6>
                <p > Intake <span className='vertical-line'>| </span>60 </p>
                <p ><span className='vertical-line'>| </span>Choice Code:</p>
                <p >415191210</p>
              </div>
            </div>
            <div className='card8'>
              <WbIncandescentIcon style={{ color: 'orange' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>ELECTRICAL ENGINEERING</h6>
                <p > Intake <span className='vertical-line'>| </span> 120</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415129310</p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='card9'>
              <AccountBoxIcon style={{ color: 'rgb(237, 20, 183)' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>MASTER OF BUSINESS ADMINISTRATION</h6>
                <p > Intake <span className='vertical-line'>| </span>120</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415110110</p>
              </div>
            </div>
            <div className='card10'>
              <AirplanemodeActiveIcon color="primary" sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>AERONOTICAL ENGINEERING</h6>
                <p > Intake <span className='vertical-line'>| </span>60</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415100210</p>
              </div>
            </div>
            <div className='card11'>
              <HourglassFullIcon style={{ color: ' rgb(6, 180, 6)' }} sx={{ fontSize: 50 }} />
              <div className='card-Info'>
                <h6 className='branch-names'>B.TECH BIO-TECHNOLOGY</h6>
                <p > Intake <span className='vertical-line'>| </span> 60</p>
                <p ><span className='vertical-line'>|  </span>Choice Code:</p>
                <p >415108210</p>
              </div>
            </div>
          </div>
        </center>
      </div >

      {/* Management */}


      {/* Management */}

      < div >
        <center><h3 className='heading'>MANAGEMENT</h3></center>
        <p className='underline'></p>
        <div id='management-container'>
          <div className="management-card" style={{ width: "30rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguzK4-v3tucd7TCgsbnFxaYaYx4A7aho5XQ&usqp=CAU" className="card-img-top" alt="Chairman" />
            <div className="card-body" >
              <p className="card-text">CHAIRMAN, GPG</p>
              <h4 className='management-name'>Dr. Mohan Gaikwad-Patil</h4>
            </div>
          </div>
          <div className="management-card" style={{ width: "30rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5k6wryvQnguQYbXREOCcJ1FItbeNndxIGhK5zy6hsDbjIWN1NZR4HqSDqYBEoXi8PDU&usqp=CAU" className="card-img-top" alt="President" />
            <div className="card-body" >
              <p className="card-text">PRESIDENT, GPGI</p>
              <h4 className='management-name'>Dr. Anjali Patil-Gaikwad</h4>
            </div>
          </div>
          <div className="management-card" style={{ width: "30rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurMaUofzj6WFPlGcdH-9bEhhI0xpj3kBrGg&usqp=CAU" className="card-img-top" alt="Treasurer" />
            <div className="card-body" >
              <p className="card-text">TREASURER, GPGI</p>
              <h4 className='management-name'>Prof. Sandeep Gaikwad</h4>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default Home
