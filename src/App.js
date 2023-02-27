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
import Registration from './Components/Registration';
import Login from './Components/Login';
import AlumniRegistration from './Components/AlumniRegistration';
import HodLogin from './Components/HodLogin';
import StudentLogin from './Components/StudentLogin';
import AlumniLogin from './Components/AlumniLogin';
import AdminDashboard from './Components/AdminDashboard';
import HodDashboard from './Components/HodDashboard';
import AddDrive from './Components/AddDrive';
import StudentDrive from './Components/StudentDrive';

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
          <Route path='admindashboard' element={<AdminDashboard />} />
          <Route path='hoddashboard' element={<HodDashboard />} />
          <Route path='fullcalender' element={<FullCalender/>}/>
          <Route path='exams' element={<Exams/>}/>
          <Route path='drives' element={<Drives/>}/>
          <Route path='test' element={<Test/>}/>
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='alumniregister' element={<AlumniRegistration />} />
          <Route path='hodlogin' element={<HodLogin />} />
          <Route path='studentlogin' element={<StudentLogin />} />
          <Route path='alumnilogin' element={<AlumniLogin/>} />
          <Route path='adddrive' element={<AddDrive/>}/>
          <Route path='studentdrive' element={<StudentDrive/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
