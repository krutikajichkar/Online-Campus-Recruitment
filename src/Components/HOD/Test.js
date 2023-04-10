import React,{useEffect, useState} from 'react'
import './Test.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { db } from '../../Firebase';
import { collection , getDocs } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';

function Test() {
  const [mcq, setmcq] = useState([])
  const collectionRef = collection(db,'AmptitudeTest');
  const getData = async() => {
    await getDocs(collectionRef).then((response) => {
      
       setmcq(response.docs.map((item) => ({
        
          ...item.data(),id:item.id
        
       })))
    })
  }
  useEffect(() => {
    getData();
  },[])
  return (
    <div>
      <div className=' test-box'>
        <div className='sidebar'>
          <h4 style={{ color: 'darkcyan' }}>DashBoard</h4>
          <div>
            <NavLink className='link' to='/studentdashboard'> < PermIdentityIcon /> &nbsp; &nbsp;&nbsp;Student Details </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/fullCalender'><CalendarMonthIcon /> &nbsp;&nbsp;&nbsp;&nbsp;Full Calendar</NavLink>
          </div>
          <div>
            <NavLink className='link' to='/exams'> <ContentPasteIcon /> &nbsp; &nbsp;&nbsp;Exams </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/studentdrive'><HourglassEmptyIcon /> &nbsp; &nbsp;&nbsp;Drives </NavLink>
          </div>
          <div>
            <NavLink className='link' to='/test'><ContentPasteSearchIcon /> &nbsp; &nbsp;&nbsp;Test </NavLink>
          </div>
        </div>

        <div className='detail-card'>
          <h1 className='mcq-test'>Multiple Choice Questions (MCQ) </h1>
          {
            mcq.map((ele , i) => {
              return(
                <div className='que-box' key={ele.id}>
            <p>{`Que(${i+1})  ${ele.que}`}</p>
            
            < div className='radio'>
              <input id='1' name='group' type='radio'/>&nbsp;&nbsp;{ele.A}
              </div><br></br> 
              < div className='radio'>
              <input id='2' name='group' type='radio'/>&nbsp;&nbsp;{ele.B}
              </div> <br></br>
              < div className='radio'>
              <input id='3' name='group' type='radio'/>&nbsp;&nbsp;{ele.C}
              </div> <br></br>
              < div className='radio'>
              <input id='4' name='group' type='radio'/>&nbsp;&nbsp;{ele.D}
              </div> 
              <hr className='que-row'></hr>
          </div>
              )
            })
          }
         <div style={{textAlign:'right', width:'80%'}}><button className=' next-btn '>Next</button></div> 
        </div>

      </div>
    </div>
  )
}

export default Test

