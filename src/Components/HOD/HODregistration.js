import React, { useState, useRef } from "react";
import "./HODRegistration.css";
import { useNavigate } from "react-router-dom";
import { db, signup } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";

function HODRegistration(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState("");
  const [department, setdepartment] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const HODData = async () => {
    await addDoc(collection(db, 'HODdata'), {
      Name: name,
      email: email,
      user: "HOD",
      password: password,
    });
  };

  const handleRegistration = async () => {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("Registered Succesfully");
      navigate("/hodlogin");

    } catch (error) {
      alert(error.meassage);
    }
    HODData();

  };

  return (
    <div id='sr1'>
      <div id='sr2' class="srfont">
        <h2 class="srcenter srpd">HOD Registration</h2>
        <p class="srcenter">
          Create your account. It's free and only takes a minute.
        </p>
        <div class="form_input">
          <input type="text" defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }} placeholder="Name"></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input type="email" ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }} placeholder="Email" required></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input type="password" ref={passwordRef}
            onChange={(e) => {
              setPassword(e.target.value);
            }} placeholder="Password" required></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input type="text" defaultValue={department}
            onChange={(e) => {
              setdepartment(e.target.value);
            }} placeholder="Department" required></input>
          <span class="bar"></span>
        </div>
        <div id="sridcenter" class="srfont">
          <button onClick={() => navigate("/")} class="srbt">Back</button>
          <button onClick={handleRegistration} type="submit" class="srbt">Register Now</button>
        </div>
      </div>
    </div>


  );
}

export default HODRegistration;
