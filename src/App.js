import './App.css'
//import AboutUs from './Components/AboutUs';
import React from 'react';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
