import React from 'react'
import './Feedback.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
function Feedback() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='container'>
                <div className='triangle'></div>
                <div className='box'>
                <div className='icon'>
                    <FontAwesomeIcon  icon={faQuoteLeft} />
                    </div>
                    <div className='content'>
                        <p>College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.
                        </p>
                        <center><div className='horizontal-underline'></div></center>
                        <h4 className='name'>Bharti Nagpure</h4>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                    <FontAwesomeIcon  icon={faQuoteLeft} />
                    </div>
                    <div className='content'>
                        <p>College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.
                        </p>
                       <center><div className='horizontal-underline'></div></center> 
                        <h4 className='name'>Bharti Nagpure</h4>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Feedback
