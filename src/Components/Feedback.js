import React from 'react'
import './Feedback.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function Feedback() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='container'>
                <div className='box'>
                    <div className='icon'></div>
                    <div className='content'>
                        <p>College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.
                        </p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'></div>
                    <div className='content'>
                        <p>College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Feedback
