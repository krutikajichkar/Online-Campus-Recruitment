import React from 'react'
import './Navbar.css'
import{Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
       <nav>
       <ul type='none'>
            <Link to=''>Home</Link>
            <Link to='/about'>About</Link>
            <li>Alumni Activities</li>
            <li>Alumni Committee</li>
            <li>Feedback</li>
            <li>Register</li>
            <li>Login</li>
        </ul>
       </nav>
    </div>
  )
}

export default Navbar