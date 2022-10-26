import './App.css'
import About from './Components/About';
import React from 'react';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlumniActivities from './Components/AlumniActivities';

function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='activities' element={<AlumniActivities />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
