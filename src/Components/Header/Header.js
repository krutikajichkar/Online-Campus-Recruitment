import React from "react";
import './Header.css';
import tgpcetLogo from '../Images/tgpcetLogo.png';
import NaacLogo from '../Images/NaacLogo.png'

function Header() {
  return (
    <div>
      <div id="header-div">
        <img id="tgpcetlogo" src={tgpcetLogo} alt="tgpcetLogo" />
        <img id="naaclogo" src={NaacLogo} alt="NaacLogo" />
      </div>
    </div>
  );
}

export default Header;
