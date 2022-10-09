import React from 'react'
import './NavHome.css'
import NaacLogo from '../Components/Images/NaacLogo.png'
import tgpcetLogo from '../Components/Images/tgpcetLogo.png'


function NavHome() {
  return (
    <div >
     <nav>
      <img id='tgpcetlogo' src={tgpcetLogo} alt="tgpcetLogo" />
      <img id='naaclogo' src={NaacLogo} alt="NaacLogo" />
     </nav>
    </div>
  )
}

export default NavHome
