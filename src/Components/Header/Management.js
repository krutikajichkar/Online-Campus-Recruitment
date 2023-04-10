import React from 'react'
import './Home.css'
function Management() {
  return (
    <div style={{marginTop:"750px"}}>
         <center><h3 className='heading'>MANAGEMENT</h3></center>
        <p className='underline'></p>
        <div className='management-container container'>
          <div className="management-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguzK4-v3tucd7TCgsbnFxaYaYx4A7aho5XQ&usqp=CAU" className="card-img-top" alt="Chairman" />
            <div className="card-body" >
              <p className="card-text">CHAIRMAN, GPG</p>
              <h4 className='management-name'>Dr. Mohan Gaikwad-Patil</h4>
            </div>
          </div>
          <div className="management-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5k6wryvQnguQYbXREOCcJ1FItbeNndxIGhK5zy6hsDbjIWN1NZR4HqSDqYBEoXi8PDU&usqp=CAU" className="card-img-top" alt="President" />
            <div className="card-body" >
              <p className="card-text">PRESIDENT, GPGI</p>
              <h4 className='management-name'>Dr. Anjali Patil-Gaikwad</h4>
            </div>
          </div>
          <div className="management-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurMaUofzj6WFPlGcdH-9bEhhI0xpj3kBrGg&usqp=CAU" className="card-img-top" alt="Treasurer" />
            <div className="card-body" >
              <p className="card-text">TREASURER, GPGI</p>
              <h4 className='management-name'>Prof. Sandeep Gaikwad</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Management