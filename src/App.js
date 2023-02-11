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
import Registration from './Components/Registration';
import Login from './Components/Login';
import AlumniRegistration from './Components/AlumniRegistration';
import HodLogin from './Components/HodLogin';
import StudentLogin from './Components/StudentLogin';
import AlumniLogin from './Components/AlumniLogin';

function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='activities' element={<AlumniActivities />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='activities' element={<AlumniActivities />} />
          <Route path='placedstudents' element={<PlacedStudents />} />
          <Route path='studentdashboard' element={<StudentDashboard />} />
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='alumniregister' element={<AlumniRegistration />} />
          <Route path='hodlogin' element={<HodLogin />} />
          <Route path='studentlogin' element={<StudentLogin />} />
          <Route path='alumnilogin' element={<AlumniLogin/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
