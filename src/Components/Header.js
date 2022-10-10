import React from 'react'
import './Header.css'
import NaacLogo from '../Components/Images/NaacLogo.png'
import tgpcetLogo from '../Components/Images/tgpcetLogo.png'


function NavHome() {
  return (
    <div id='header-div'>
      <img id='tgpcetlogo' src={tgpcetLogo} alt="tgpcetLogo" />
      <img id='naaclogo' src={NaacLogo} alt="NaacLogo" />
     
    </div>
  )
}

export default NavHome
