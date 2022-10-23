// import { height } from '@mui/system'
import React from 'react'
import tgpcetImg from '../Components/Images/tgpcetImg.png'
import AlumnImg from '../Components/Images/AlumnImg.png'
import tgpcetLogo from '../Components/Images/tgpcetLogo.png'
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
function Home() {
  return (
    <div id='main-div'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img style={{ height: '440px' }} src={tgpcetImg} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={AlumnImg} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={tgpcetLogo} className="d-block w-100  " alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h2> PROGRAMS @ TGPCET</h2>
        <p className='underline'></p>
        <div className='row'>
          <div className='card1 '>
            <div className='icons'>
              <WifiIcon style={{ color: 'rgb(237, 20, 183)' }} sx={{ fontSize: 50 }} />
            </div>
            <div className='Info'>
              <h6>INFORMATION TECHNOLOGY</h6>
              <p> Intake <span>| </span> 60</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415124610</p>
            </div>
          </div>
          <div className='card2'>
            <ImportantDevicesIcon style={{ color: 'rgb(19, 222, 222)' }} sx={{ fontSize: 50 }} />
            <div>
              <h6>MASTER IN COMPUTER APPLICATION</h6>
              <p> Intake <span>| </span>120</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415124110</p>
            </div>
          </div>
          <div className='card3'>
            <ApartmentIcon color='primary' sx={{ fontSize: 50 }} />
            <div>
              <h6>CIVIL ENGINEERING</h6>
              <p> Intake <span>| </span>120</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415119110</p>
            </div>
          </div>
          <div className='card4'>
            <AdbIcon style={{ color: 'rgb(6, 180, 6)' }} sx={{ fontSize: 50 }} />
            <div>
              <h6>COMPUTER SCIENCE AND ENGINEERING</h6>
              <p> Intake <span>| </span> 120</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415124210</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='card5'>
            <EngineeringIcon color='primary' sx={{ fontSize: 50 }} />
            <div className='Info'>
              <h6>MECHANICAL ENGINEERING</h6>
              <p> Intake <span>| </span> 120</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415161210</p>
            </div>
          </div>
          <div className='card6'>
            <CellTowerIcon style={{ color: 'orange' }} sx={{ fontSize: 50 }} />
            <div>
              <h6>ELECTRONICS & COMMUNICATION ENGINEERING</h6>
              <p> Intake <span>| </span> 60</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415137010</p>
            </div>
          </div>
          <div className='card7'>
            <ViewDayIcon style={{ color: "rgb(19, 222, 222)" }} sx={{ fontSize: 50 }} />
            <div>
              <h6>COMPUTER SCIENCE AND ENGINEERING (DATA SCIENCE)</h6>
              <p> Intake <span>| </span>60 </p>
              <p><span>| </span>Coarse Code:</p>
              <p>415191210</p>
            </div>
          </div>
          <div className='card8'>
            <WbIncandescentIcon style={{ color: 'orange' }} sx={{ fontSize: 50 }} />
            <div>
              <h6>ELECTRICAL ENGINEERING</h6>
              <p> Intake <span>| </span> 120</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415129310</p>
            </div>
          </div>
          <div className='card9'>
            <AccountBoxIcon style={{ color: 'rgb(237, 20, 183)' }} sx={{ fontSize: 50 }} />
            <div>
              <h6>MASTER OF BUSINESS ADMINISTRATION</h6>
              <p> Intake <span>| </span>120</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415110110</p>
            </div>
          </div>
          <div className='card10'>
            <AirplanemodeActiveIcon color="primary" sx={{ fontSize: 50 }} />
            <div>
              <h6>AERONOTICAL ENGINEERING</h6>
              <p> Intake <span>| </span>60</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415100210</p>
            </div>
          </div>
          <div className='card11'>
            <HourglassFullIcon style={{ color: ' rgb(6, 180, 6)' }} sx={{ fontSize: 50 }} />
            <div>
              <h6>B.TECH BIO-TECHNOLOGY</h6>
              <p> Intake <span>| </span> 60</p>
              <p><span>|  </span>Coarse Code:</p>
              <p>415108210</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>MANAGEMENT</h2>
        <p className='underline'></p>
        <div style={{display:'flex', padding:'0% 10%'}}>
          <div class="card" style={{ width: "30rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguzK4-v3tucd7TCgsbnFxaYaYx4A7aho5XQ&usqp=CAU" class="card-img-top" alt="Chairman" />
            <div class="card-body" style={{background:'rgb(8, 8, 81)'}}>
              <p class="card-text">CHAIRMAN, GPG</p>
              <h4>Dr. Mohan Gaikwad-Patil</h4>
            </div>
          </div>
          <div class="card" style={{ width: "30rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5k6wryvQnguQYbXREOCcJ1FItbeNndxIGhK5zy6hsDbjIWN1NZR4HqSDqYBEoXi8PDU&usqp=CAU" class="card-img-top" alt="President" />
            <div class="card-body" style={{background:'rgb(8, 8, 81)'}}>
              <p class="card-text">PRESIDENT, GPGI</p>
             <h4>Dr. Anjali Patil-Gaikwad</h4>
            </div>
          </div>
          <div class="card" style={{ width: "30rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurMaUofzj6WFPlGcdH-9bEhhI0xpj3kBrGg&usqp=CAU" class="card-img-top" alt="Treasurer" />
            <div class="card-body" style={{background:'rgb(8, 8, 81)'}}>
              <p class="card-text">TREASURER, GPGI</p>
              <h4>Prof. Sandeep Gaikwad</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

