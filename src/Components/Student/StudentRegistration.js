import React, { useState } from "react";
import "./StudentRegistration.css";
import { signup, useAuth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
//import input from "@mui/material/input";
import { db } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import Container from "@mui/material/Container";

function Registration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [department, setdepartment] = useState();
  const [session, setsession] = useState();
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const StudentData = async () => {
    await addDoc(collection(db, 'StudentData'), {
      Name: name,
      session: session,
      email: email,
      password: password,
      user: "Student",
      
    });
  };

  const handleSignup = async () => {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      
      alert("Registered Succesfully!!");
      navigate("/studentdashboard");
     
    } catch (error) {
      alert(error.message);
    }
    StudentData();
  };

  return (
    <div id="box">
      <div className="container1">
        <div className="forms">
          <div className="form-login2">
            <form >
              <h2 className="reg_name">Student Registration</h2>
              <p className="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
              {/* <div className="form-groups">
                <input
                 
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  size="small"
                  type="text"
                  required
                />
              </div>
              <div className="form-groups">
                <input
                  ref={emailRef}
                
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                 
                  placeholder="Email"
                  id="fullWidth1"
                  size="small"
                  type="email"
                  required
                />
              </div>
              <div className="form-groups">
                <input
                  ref={passwordRef}
                 
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                 
                  placeholder="Password"
                  
                  size="small"
                  type="password"
                  required
                />
              </div>
              <div className="form-groups">
                <input
                  
                  placeholder="Department"
                  value={department}
                  onChange={(e) => {
                    setdepartment(e.target.value);
                  }}
                  size="small"
                  type="department"
                  required
                />
              </div>
              <div className="form-groups">
                <input
                 
                  placeholder="Session"
                  value={session}
                  onChange={(e) => {
                    setsession(e.target.value);
                  }}
                  size="small"
                  required
                />
              </div> */}

              <input type="text"  placeholder="name" value={name}  onChange={(e) => {
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
              <input type="text" placeholder="department" value={department}
                  onChange={(e) => {
                    setdepartment(e.target.value);
                  }}/>
                  <br />
              <input type="text" placeholder="session" value={session}
                  onChange={(e) => {
                    setsession(e.target.value);
                  }}/>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{
                    marginRight: "20px",
                    borderRadius: "20px",
                    width: "100px",
                    fontWeight: "400",
                  }}
                  className="btn btn-primary"
                  onClick={() => navigate(-1)}
                >
                  {" "}
                  Back
                </button>

                <button
                  onClick={handleSignup}
                  style={{
                    marginLeft: "20px",
                    borderRadius: "20px",
                    width: "150px",
                    fontWeight: "400",
                  }}
                  type="submit"
                  className=" btn btn-primary "
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
