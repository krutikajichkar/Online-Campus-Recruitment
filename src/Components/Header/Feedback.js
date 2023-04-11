import React, { useEffect, useState } from "react";
import "./Feedback.css";
import Header from "../Header/Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import Carousel from "../Header/Carousel";
import Loader from "../Loader";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
  },
};
Modal.setAppElement("#root");
function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [name, setName] = useState();
  const [department, setDepartment] = useState();
  const [session, setSession] = useState();
  const [content, setContent] = useState();
  const collectionRef = collection(db, "feedback");
  const [loading, setloading] = useState(true)

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const addFeedback = async () => {
    await addDoc(collectionRef, {
      name: name,
      batch: session,
      branch: department,
      content: content,
    })
      .then((response) => {
        console.log(response.data);
        alert("Feedback added successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const feedbackHandler = () => {
    addFeedback();
    setContent("");
    setName("");
    setDepartment("");
    setSession("")
    closeModal();
  };


    return (
      < >
        <Header />
        <Navbar />
        {loading && <Loader/>}
      
        <h3 className="headline">What students said about college !</h3>
        <p className="underline"></p>
        
     <center> <Carousel setloading={setloading} loading={loading}/></center>
        {!loading && <div>
       <center>
          {" "}
          <h3 className="headline2"> Want to write something about College ?</h3>
          <p className="underline"></p>
        </center>
        <center>
           <div>
            <button
              style={{ marginTop: "-30px" }}
              onClick={openModal}
              className="btn btn-success"
            >
              WRITE HERE
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            id="modal"
          >
            <div
              style={{ cursor: "pointer", textAlign: "right" }}
              onClick={closeModal}
            >
              {" "}
              <CloseIcon />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Department
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=" "
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Session
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder=" "
                value={session}
                onChange={(e) => setSession(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Your Feedback
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <center>
              <button className="btn-primary btn" onClick={feedbackHandler}>
                Submit
              </button>
            </center>
          </Modal>
        </center>
        <Footer />
        
        </div>}
      </>
      
    );
    
  }

export default Feedback;

