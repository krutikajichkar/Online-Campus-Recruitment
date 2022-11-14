import React from "react";
import "./Navbar.css";
import fullSizeLogo from "../Components/Images/fullSizeLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};

Modal.setAppElement("#root");

function Navbar() {
  let subtitle;

  const [StudentRegistrationmodalIsOpen, setStudentRegistrationIsOpen] =
    React.useState(false);
  const [AlumniRegistrationmodalIsOpen, setAlumniRegistrationIsOpen] =
    React.useState(false);
    const [AlumniLoginmodalIsOpen, setAlumniLoginIsOpen] =
    React.useState(false);
    const [HODLoginmodalIsOpen, setHODLoginIsOpen] =
    React.useState(false);
    const [StudentLoginmodalIsOpen, setStudentLoginIsOpen] =
    React.useState(false);
    const [AdminLoginmodalIsOpen, setAdminLoginIsOpen] =
    React.useState(false);

  function openStudentRegistrationModal() {
    setStudentRegistrationIsOpen(true);
  }

  const openAlumniRegistrationModal = () => {
    setAlumniRegistrationIsOpen(true);
  };

  const openAlumniLoginModal = () => {
    setAlumniLoginIsOpen(true);
  };

  const openHODLoginModal = () => {
    setHODLoginIsOpen(true);
  };

  const openStudentLoginModal = () => {
    setStudentLoginIsOpen(true);
  };

  const openAdminLoginModal = () => {
    setAdminLoginIsOpen(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setStudentRegistrationIsOpen(false);
    setAlumniRegistrationIsOpen(false);
    setAlumniLoginIsOpen(false);
    setHODLoginIsOpen(false);
    setAdminLoginIsOpen(false);
    setStudentLoginIsOpen(false);
    setAlumniLoginIsOpen(false);
   
  }
  return (
    <div>
      <nav>
        <ul type="none">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/about">
            {" "}
            <li>About</li>
          </Link>
          <Link className="link" to="/activities">
            {" "}
            <li>Alumni Activities</li>
          </Link>
          <li>Alumni Committee</li>
          <Link className="link" to='/feedback'>
            {" "}
            <li>Feedback</li>
          </Link>
          <Link className="link" to='/placedstudents'>
            {" "}
            <li>PlacedStudents</li>
          </Link>
        </ul>
        <div style={{ display: "flex" }}>
          <div className="dropdown" style={{ paddingRight: "20px" }}>
            <button
              className="dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                fontSize: "20px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Register
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={openStudentRegistrationModal}
                >
                  Student Registration
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={openAlumniRegistrationModal}
                >
                  Alumni Registration
                </button>
              </li>
              {/* <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li> */}
            </ul>
          </div>
          <div className="dropdown" style={{ paddingRight: "20px" }}>
            <button
              className=" dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                fontSize: "20px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button" onClick={openAdminLoginModal}>
                  Admin Login
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button" onClick={openHODLoginModal}>
                  HOD Login
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button" onClick={openStudentLoginModal}>
                  Student Login
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button" onClick={openAlumniLoginModal}>
                  Alumni Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="screen-visible-div">
        <span></span>
        <button
          style={{ backgroundColor: "transparent", border: 'none' }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBackdrop"
          aria-controls="offcanvasWithBackdrop"
        >
          {" "}
          <MenuIcon id="menuicon" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasWithBackdrop"
          aria-labelledby="offcanvasWithBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
              Hello there
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul type="none">
              <Link className="link" to="/">
                <li>Home</li>
              </Link>
              <Link className="link" to="/about">
                {" "}
                <li>About</li>
              </Link>
              <li>Alumni Comittee</li>
             <Link className="link" to='/activities'> <li>Alumni Activities</li></Link>
              <Link className="link" to='/feedback'><li>Feedback</li></Link>
              <li>
                <div className="btn-group dropend">
                  <button
                    type="button"
                    className=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                      border: "none",
                    }}
                  >
                    Register
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button" onClick={openAlumniRegistrationModal}>
                        Alumni Register
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button" onClick={openStudentRegistrationModal}>
                        Student Register
                      </button>
                    </li>
                    {/* <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li>
                <div className="btn-group dropend">
                  <button
                    type="button"
                    className=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                      border: "none",
                    }}
                  >
                    Login
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button" onClick={openAdminLoginModal}>
                        Admin Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button" onClick={openHODLoginModal}>
                        HOD Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button" onClick={openStudentLoginModal}>
                        Student Login
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button" onClick={openAlumniLoginModal}>
                        Alumni Login
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span>
          <center>
            {" "}
            <img src={fullSizeLogo} alt="tgpcetlogo" />
          </center>
        </span>
      </div>
      {/* Modal */}
      <Modal
        id="studentRegistrationModal"
        isOpen={StudentRegistrationmodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={closeModal}
        >
          {" "}
          <CloseIcon />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Session
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <center>
          <button className="btn btn-primary">Submit</button>
        </center>
      </Modal>
      <Modal
        id="AlumniRegistrationModal"
        isOpen={AlumniRegistrationmodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={closeModal}
        >
          {" "}
          <CloseIcon />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Session
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Currently Working At
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            LinkedIn Profile
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            required
          />
        </div>
        <center>
          <button className="btn btn-primary">Submit</button>
        </center>
      </Modal>
      
      <Modal
        id="AdminLoginModal"
        isOpen={AdminLoginmodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={closeModal}
        >
          {" "}
          <CloseIcon />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="Password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        {/* <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Session
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div> */}
        <center>
          <button className="btn btn-primary">Submit</button>
        </center>
      </Modal>
      
      <Modal
        id="HODLoginModal"
        isOpen={HODLoginmodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={closeModal}
        >
          {" "}
          <CloseIcon />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Session
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <center>
          <button className="btn btn-primary">Submit</button>
        </center>
      </Modal>
      
      <Modal
        id="StudentLoginModal"
        isOpen={StudentLoginmodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={closeModal}
        >
          {" "}
          <CloseIcon />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Session
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <center>
          <button className="btn btn-primary">Submit</button>
        </center>
      </Modal>
      <Modal
        id="AlumniLoginModal"
        isOpen={AlumniLoginmodalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{ cursor: "pointer", textAlign: "right" }}
          onClick={closeModal}
        >
          {" "}
          <CloseIcon />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Session
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <center>
          <button className="btn btn-primary">Submit</button>
        </center>
      </Modal>
    </div>
  );
}

export default Navbar;
