import React, { useState, useRef } from "react";
import "./HODRegistration.css";
import { useNavigate } from "react-router-dom";
import { db, signup } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";

function HODRegistration(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [department, setdepartment] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const HODData = async () => {
    await addDoc(collection(db, "HODdata"), {
      Name: name,
      email: email,
      user: "HOD",
      password: password,
    });
  };

  const handleRegistration = async () => {
    try {
      await signup(emailRef.currentUser.value, passwordRef.current.value);
      HODData();
      alert("Registered Succesfully");
      navigate("/studentdashboard");
    } catch (error) {
      alert(error.meassage);
    }
  };

  return (
    <div id="box">
      <div className="container2">
        <div className="forms">
          <div className="form-login1">
            <form action="#">
              <h2 id="h2">HOD Registration</h2>
              <p className="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              <div className="form-group1">
                <TextField
                  fullWidth
                 
                   defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  size="small"
                  type="text"
                  required
                />
              </div>
              <div className="form-group1">
                <TextField
                  placeholder="email"
                  fullWidth
                  label="Email"
                  inputRef={emailRef}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  size="small"
                  type="email"
                  required
                />
              </div>
              <div className="form-group1">
                <TextField
                  fullWidth
                  label="Password"
                  inputRef={passwordRef}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  size="small"
                  type="password"
                  required
                />
              </div>
              <div className="form-group1">
                <TextField
                  fullWidth
                  label="Department"
                  defaultValue={department}
                  onChange={(e) => {
                    setdepartment(e.target.value);
                  }}
                  size="small"
                  type="department"
                  required
                />
              </div>

              <div className="btn-group">
                <div id="left-btn">
                  <button
                    className="btn2 btn btn-primary btn-sm"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </button>
                </div>
                <div id="right-btn">
                  <button
                    type="submit"
                    className="btn2 btn btn-primary btn-sm"
                    onClick={handleRegistration}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HODRegistration;