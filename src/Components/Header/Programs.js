import React from 'react'
import './Home.css'
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
function Programs() {
  return (
    <div>
          <center>  <h3 className='heading'> PROGRAMS @ TGPCET</h3>
          <p className='underline'></p>

          <div className='row container'>
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
    </div>
  )
}

export default Programs