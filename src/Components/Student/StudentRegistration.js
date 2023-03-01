// import React, { useState } from "react";
// import "./StudentRegistration.css";
// import { signup, useAuth } from "../../Firebase";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// //import input from "@mui/material/input";
// import { db } from "../../Firebase";
// import { collection, addDoc } from "firebase/firestore";
// import Container from "@mui/material/Container";

// function StudentRegistration() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [name, setName] = useState("");
//     const [department, setdepartment] = useState("");
//     const [session, setsession] = useState("");
//     const currentUser = useAuth();

//     const emailRef = useRef();
//     const passwordRef = useRef();

//     const StudentData = async () => {
//         await addDoc(collection(db, 'StudentData'), {
//             Name: name,
//             session: session,
//             email: email,
//             password: password,
//             user: "Student",

//             const handleSignup = async () => {
//                 try {
//                     await signup(emailRef.current.value, passwordRef.current.value);

//                     alert("Registered Succesfully!!");
//                     navigate("/studentlogin");

//                 } catch (error) {
//                     alert(error.message);
//                 }
//                 StudentData();
//             };

//             const handleSignup = async () => {
//                 try {
//                     await signup(emailRef.current.value, passwordRef.current.value);

//                     alert("Registered Succesfully!!");
//                     navigate("/studentdashboard");

//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                         <button
//                             style={{
//                                 marginRight: "20px",
//                                 borderRadius: "20px",
//                                 width: "100px",
//                                 fontWeight: "400",
//                             }}
//                             className="btn btn-primary"
//                             onClick={() => navigate('/')}
//                         >
//                             {" "}
//                             Back
//                         </button>

//                     </div>
//     )
//     }

//     export default StudentRegistration