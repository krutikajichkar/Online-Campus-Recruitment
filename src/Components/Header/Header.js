import React from "react";
import './Header.css';
import NaacLogo from '../Images/NaacLogo';
import tgpcetLogo from "../Images/tgpcetLogo.png";

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
