import './App.css'
import About from './Components/About';
import React from 'react';
// import Header from './Components/Header'
// import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Feedback from './Components/Feedback';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlumniActivities from './Components/AlumniActivities';
import PlacedStudents from './Components/PlacedStudents';
import StudentDashboard from './Components/StudentDashboard';
import FullCalender from './Components/FullCalender';
import Exams from './Components/Exams';
import Drives from './Components/Drives';
import Test from './Components/Test';

function App() {
  return (
    <div >
  
      <BrowserRouter>

        <Routes>
          <Route path='/' className='active' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='activities' element={<AlumniActivities />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='activities' element={<AlumniActivities />} />
          <Route path='placedstudents' element={<PlacedStudents />} />
          <Route path='studentdashboard' element={<StudentDashboard />} />
          <Route path='fullcalender' element={<FullCalender/>}/>
          <Route path='exams' element={<Exams/>}/>
          <Route path='drives' element={<Drives/>}/>
          <Route path='test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
      
          </div>
  );
}

export default App;
