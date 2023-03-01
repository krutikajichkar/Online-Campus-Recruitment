import React, { useState } from "react";
import "./StudentRegistration.css";
import { signup, useAuth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
//import input from "@mui/material/input";
import { db } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import Container from "@mui/material/Container";

function StudentRegistration() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState("");
    const [department, setdepartment] = useState("");
    const [session, setsession] = useState("");
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
        <div id='sr1'>
            <div id='sr2' class="srfont">
                <h2 class="srcenter srpd">Student Registration</h2>
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
                    <input type="text" defaultValue={session}
                        onChange={(e) => {
                            setsession(e.target.value);
                        }} placeholder="Session" required></input>
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
                    <input type="password" ref={passwordRef}

                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} placeholder="Password" required></input>
                    <span class="bar"></span>
                </div>

                <div id="sridcenter" class="srfont">
                    <button onClick={() => navigate("/")} class="srbt">Back</button>
                    <button onClick={handleSignup} type="submit" class="srbt">Register Now</button>
                </div>
            </div>

        </div>
    )
}

export default StudentRegistration