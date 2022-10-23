import './App.css'
import AboutUs from './Components/AboutUs';
import React from 'react';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home  from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main';

function App() {
  return (
    <div >
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
