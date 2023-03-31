import React, { useState, useRef } from "react";
import "../HOD/HODRegistration.css";
import { useNavigate } from "react-router-dom";
import { db, signup, useAuth } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword ,getAuth} from "firebase/auth";

function AdminRegistration() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState('');
  const [department, setdepartment] = useState('');
  const [phone, setphone] = useState()
  const [address, setaddress] = useState()
  
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const auth = getAuth();

  // const adminData = async () => {
  //   await addDoc(collection(db, "AdminData"), {
  //     Name: name,
  //     email: email,
  //     user: "Admin",
  //     password: password,
  //     userId:resposne.user.uid,
  //   });
  // };

  const handleRegistration = async () => {
    // try {
    //   await signup(emailRef.current.value, passwordRef.current.value);
    //   alert("Registered Succesfully!!");
    //   navigate("/adminlogin");

    // } catch (error) {
    //   alert(error.meassage);
    // }
    // adminData();

    createUserWithEmailAndPassword(auth , emailRef.current.value,passwordRef.current.value).then((response) => {
      addDoc(collection(db, "AdminData"), {
        Name: name,
        email: email,
        user: "Admin",
        password: password,
        address:address,
        phone:phone,
        department:department,
        userId:response.user.uid,
      });
      alert("Registered Succesfully!!");
      navigate("/adminlogin");
    }).catch((err) => {
      alert(err.message)
    })
  };

  return (
    <div id='sr1'>
      <div id='sr2' class="srfont">
        <h2 class="srcenter srpd">Admin Registration</h2>
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
        <div class="form_input">
          <input type="text" defaultValue={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }} placeholder="Phone" required></input>
          <span class="bar"></span>
        </div>
        <div class="form_input">
          <input type="text" defaultValue={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }} placeholder="Address" required></input>
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

export default AdminRegistration;
