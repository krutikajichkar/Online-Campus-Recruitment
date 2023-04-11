import "./App.css";
import About from "./Components/Header/About";
import React from "react";
// import Header from './Components/Header'
// import Navbar from './Components/Navbar'
import Home from './Components/Header/Home'
import Feedback from './Components/Header/Feedback';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlumniActivities from './Components/Header/AlumniActivities';
import PlacedStudents from './Components/Header/PlacedStudents';
import StudentDashboard from './Components/Student/StudentDashboard';
import Drives from './Components/Admin/Drives';
import Test from './Components/Student/Test';
import Registration from './Components/Student/StudentRegistration';
import Login from './Components/Login/Login'
import StudentLogin from './Components/Student/StudentLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import ForgetPassword from './Components/Password/ForgetPassword';
import AdminRegistration from './Components/Admin/AdminRegistration';
import StudentDrive from './Components/Student/StudentDrive';
import AddDrive from './Components/AddDrive';
import AdminLogin from './Components/Admin/AdminLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='activities' element={<AlumniActivities />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='activities' element={<AlumniActivities />} />
          <Route path='placedstudents' element={<PlacedStudents />} />
          <Route path='studentdashboard' element={<StudentDashboard />} />
          <Route path='admindashboard' element={<AdminDashboard />} />
          <Route path='drives' element={<Drives />} />
          <Route path='studentdrive' element={<StudentDrive/>}/>
          <Route path='adddrive' element={<AddDrive/>}/>
           <Route path='test' element={<Test />} />
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='adminlogin' element={<AdminLogin />} />
          <Route path='studentlogin' element={<StudentLogin />} />
          <Route path='adminregister' element={<AdminRegistration />} />
          <Route path='forgetpass' element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
