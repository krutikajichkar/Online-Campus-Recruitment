import React, { useState, useRef } from "react";
import "../HOD/HODRegistration.css";
import { useNavigate } from "react-router-dom";
import { db, signup, useAuth } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";

function AdminRegistration() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState('');
  const [department, setdepartment] = useState('');
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();


  const adminData = async () => {
    await addDoc(collection(db, "AdminData"), {
      Name: name,
      email: email,
      user: "Admin",
      password: password,
    
    });
  };

  const handleRegistration = async () => {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("Registered Successfully !!");
      navigate("/login");
      navigate("/admindashboard");
    } catch (error) {
      alert(error.meassage);
    }
    adminData();
  };

  return (
    <div id="box">
      <div className="container2">
        <div className="forms">
          <div className="form-login1">
           
              <h2 id="h2">Admin Registration</h2>
              <p className="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              {/* <div className="form-group1">
                <TextField
                  fullWidth
                  label="Username"
                  inputProps={name}
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
                  fullWidth
                  label="Email"
                  inputRef={emailRef}
                  inputProps={email}
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
                  inputProps={password}
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
                  inputProps={department}
                  onChange={(e) => {
                    setdepartment(e.target.value);
                  }}
                  
                  size="small"
                  type="department"
                  required
                />
              </div> */}

<input type="text"  placeholder="name" defaultValue={name}  onChange={(e) => {
                    setName(e.target.value);
                  }}/>
                  <br />
              <input type="email" placeholder="email"  ref={emailRef}
                
                onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
                <br />
              <input type="password" placeholder="password"   ref={passwordRef}
                 
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}/>
                 <br />
              <input type="text" placeholder="department" defaultValue={department}
                  onChange={(e) => {
                    setdepartment(e.target.value);
                  }}/>
                  <br />
            

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
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRegistration;
