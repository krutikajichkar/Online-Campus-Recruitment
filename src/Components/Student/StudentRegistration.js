import React, { useState } from "react";
import "./StudentRegistration.css";
import {  useAuth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
//import input from "@mui/material/input";
import { db } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

function StudentRegistration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState("");
  const [department, setdepartment] = useState("");
  const [session, setsession] = useState("");
  const [rollNo, setRollNo] = useState()
  const [address, setAddress] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const currentUser = useAuth();
  const auth = getAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  //   const StudentData = async () => {
  //     await addDoc(collection(db, "StudentData"), {
  //       Name: name,
  //       session: session,
  //       email: email,
  //       password: password,
  //       userId:currentUser.uid,
  //       user: "Student",
  //     });
  //   };

  const handleSignup = () => {
    //    signup(emailRef.current.value, passwordRef.current.value);
    //    StudentData();
    //   alert("Registered Successfully");
    //   navigate("/studentlogin");

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((response) => {
       // console.log(response.user);
        addDoc(collection(db, "StudentData"), {
          Name: name,
          session: session,
          email: email,
          password: password,
          userId: response.user.uid,
          user: "Student",
          roll_no : rollNo,
          phone : phoneNumber,
          address:address,
          deaprtment:department
        });

        alert("Registered Successfully");
        navigate("/studentlogin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div id="sr1">
      <div id="sr2" className="srfont">
        <h2 className="srcenter srpd">Student Registration</h2>
        <p className="srcenter">
          Create your account. It's free and only takes a minute.
        </p>
        <div className="form_input">
          <input
            type="text"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          ></input>
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="email"
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
          ></input>
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="password"
            ref={passwordRef}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
          ></input>
          
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="text"
            defaultValue={session}
            onChange={(e) => {
              setsession(e.target.value);
            }}
            placeholder="Session"
            required
          ></input>
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="text"
            defaultValue={department}
            onChange={(e) => {
              setdepartment(e.target.value);
            }}
            placeholder="Department"
            required
          ></input>
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="text"
            defaultValue={rollNo}
            onChange={(e) => {
              setRollNo(e.target.value);
            }}
            placeholder="Roll No"
            required
          ></input>
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="text"
            defaultValue={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Address"
            required
          ></input>
          <span className="bar"></span>
        </div>
        <div className="form_input">
          <input
            type="text"
            defaultValue={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="Phone Number"
            required
          ></input>
          <span className="bar"></span>
        </div>

        <div id="sridcenter" className="srfont">
          <button onClick={() => navigate("/")} className="srbt">
            Back
          </button>
          <button onClick={handleSignup} type="submit" className="srbt">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
