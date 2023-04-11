import "./StudentRegistration.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { useAuth } from "../../Firebase";
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
  const [rollNo, setRollNo] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
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
          roll_no: rollNo,
          phone: phoneNumber,
          address: address,
          deaprtment: department,
        });

        alert("Registered Successfully");
        navigate("/studentlogin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="main-wrapper">
      <div className="registration_form_wrapper container">
        <center>
          <h2>Student Registration</h2>
        </center>
        <center>
          <h4>Create your account here . It's Free</h4>
        </center>
        <hr />
        <div className="mb-3" style={{ paddingTop: "10px" }}>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            
            }}
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="password"
            ref={passwordRef}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="text"
            defaultValue={session}
            onChange={(e) => {
              setsession(e.target.value);
            }}
            placeholder="Session"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="text"
            defaultValue={department}
            onChange={(e) => {
              setdepartment(e.target.value);
            }}
            placeholder="Department"
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="text"
            defaultValue={rollNo}
            onChange={(e) => {
              setRollNo(e.target.value);
            }}
            placeholder="Roll No"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="text"
            defaultValue={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Address"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="text"
            defaultValue={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="Phone Number"
          />
        </div>

        <center>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              style={{ marginTop: "10px" }}
              onClick={handleSignup}
              className="btn btn-primary"
            >
              Register
            </button>
            <Link to="/" style={{ paddingTop: "10px" }}>
              Back
            </Link>
          </div>
        </center>
      </div>
    </div>
  );
}

export default StudentRegistration;
