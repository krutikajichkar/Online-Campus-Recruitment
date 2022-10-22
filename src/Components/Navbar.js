import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
        <ul type='none'>
          <li className='bg-red-500'>Home</li>
          <li>About</li>
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