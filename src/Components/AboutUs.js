import React from 'react'
import { Link } from 'react-router-dom'
function AboutUs() {
    return (
        <div>
            <Link to='/about'>
                <p>Welcome to About page</p>
            </Link>
        </div>
    )
}

export default AboutUs