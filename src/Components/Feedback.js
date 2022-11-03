import React from 'react'
import './Feedback.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from 'react-modal';
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '450px'
    },
};
Modal.setAppElement('#root');
function Feedback() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Header />
            <Navbar />
            <h3 className='headline'>What students said about college !</h3>
            <p className='underline'></p>
            <div className='container'>
                <div className='box'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className='content'>
                        <p className='para'>College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.
                        </p>
                        <center><div className='horizontal-underline'></div>
                        <h4 className='name'>Bharti Nagpure</h4>
                        <p>Information Technology, 2021-2022 Batch</p></center>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className='content'>
                         <p className='para'>College is located in the midst of Multimodal International Cargo Hub and Airport (MIHAN) and also in the vicinity of Butibori Industrial area, Nagpur.
                        </p>
                         <center> <div className='horizontal-underline'></div>
                            <h4 className='name'>Bharti Nagpure</h4>
                            <p>Information Technology, 2021-2022 Batch</p></center>
                    </div>
                </div>
            </div>
            <h3 className='headline2'> Want to write something about College ?</h3>
            <p className='underline'></p>
            <center>
                <div>
                    <button style={{marginTop:'-30px'}} onClick={openModal} className='btn btn-success'>WRITE HERE</button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    id='modal'
                >
                    <div
                        style={{ cursor: "pointer", textAlign: "right" }}
                        onClick={closeModal}
                    >
                        {" "}
                        <CloseIcon />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" " />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Department</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" " />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Session</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" " />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your Feedback</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                   <center><button className='btn-primary btn'>Submit</button></center> 

                </Modal>

            </center>
            <Footer />

        </div>
    )
}

export default Feedback
