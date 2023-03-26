import React, { useState, useRef } from "react";
import "./HODRegistration.css";
import { useNavigate } from "react-router-dom";
import { db, signup } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function HODRegistration(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState("");
  const [department, setdepartment] = useState("");
  const [phone, setphone] = useState()
  const [address, setaddress] = useState()
  const auth = getAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // const HODData = async () => {
  //   await addDoc(collection(db, 'HODdata'), {
  //     Name: name,
  //     email: email,
  //     user: "HOD",
  //     password: password,
  //   });
  // };

  const handleRegistration = async () => {
    // try {
    //   await signup(emailRef.current.value, passwordRef.current.value);
    //   alert("Registered Succesfully");
    //   navigate("/hodlogin");

    // } catch (error) {
    //   alert(error.meassage);
    // }
    // HODData();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((response) => {
        console.log(response.user);
        addDoc(collection(db, "HODdata"), {
          Name: name,
          email: email,
          user: "HOD",
          password: password,
          department:department,
          phone:phone,
          address:address,
          userId:response.user.uid,
        });
        alert("Registered Succesfully");
        navigate("/hodlogin");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div id="sr1">
      <div id="sr2" class="srfont">
        <h2 class="srcenter srpd">HOD Registration</h2>
        <p class="srcenter">
          Create your account. It's free and only takes a minute.
        </p>
        <div class="form_input">
          <input
            type="text"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          ></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input
            type="email"
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
          ></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input
            type="password"
            ref={passwordRef}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
          ></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input
            type="text"
            defaultValue={department}
            onChange={(e) => {
              setdepartment(e.target.value);
            }}
            placeholder="Department"
            required
          ></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input
            type="text"
            defaultValue={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            placeholder="Phone Number"
            required
          ></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input
            type="text"
            defaultValue={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            placeholder="Address"
            required
          ></input>
          <span class="bar"></span>
        </div>
        <div id="sridcenter" class="srfont">
          <button onClick={() => navigate("/")} class="srbt">
            Back
          </button>
          <button onClick={handleRegistration} type="submit" class="srbt">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HODRegistration;
