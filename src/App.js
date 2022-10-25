import './App.css'
//import AboutUs from './Components/AboutUs';
import React from 'react';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
<<<<<<< HEAD
import About from './Components/About'

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <About />
=======
import Home  from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div >
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      
     </Routes>
     </BrowserRouter>
     
>>>>>>> 84e5ab02dfb71d604b063bd6da9faca90c6c50b6
    </div>
  );
}

export default App;
