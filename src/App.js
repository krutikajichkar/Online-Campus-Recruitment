import './App.css'
import AboutUs from './Components/AboutUs';
import React from 'react';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <AboutUs />
    </div>
  );
}

export default App;
