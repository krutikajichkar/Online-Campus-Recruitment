import { height } from '@mui/system'
import React from 'react'
import Tgpcet from '../images/tgpcet img.jpg'
import Alumni from '../images/Alumni image.webp'
function Home() {
  return (
    <div id='main-div' style={{marginTop:'90px'}}>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img style={{height:'440px'}} src={Tgpcet} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Alumni} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='' className="d-block w-100  " alt="..."/>
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
    </div>
  )
}

export default Home
