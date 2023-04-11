import React, { useEffect, useState } from "react";
import "./Test.css";
import { db, logOut } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { SidebarData } from "../SidebarData";

function Test() {
  const [mcq, setmcq] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(mcq.length).fill(''))

  const navigate = useNavigate();
  const collectionRef = collection(db, "AmptitudeTest");
  const getData = async () => {
    await getDocs(collectionRef).then((response) => {
      setmcq(
        response.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleLogout = async () => {
    try {
      if (window.confirm("Do you really want to Log Out?") === true) {
        await logOut();
        alert("Logged Out Successfully");
        navigate("/");
      } else {
        navigate("/studentdashboard");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="sidebar">
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                className="sidebar-row"
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
          <li className="sidebar-row" to="/" onClick={handleLogout}>
            <div id="icon">
              {" "}
              <ExitToAppOutlinedIcon />{" "}
            </div>
            <div id="title"> Logout</div>
          </li>
        </ul>
      </div>

      <div className="detail-card">
        <h1 className="mcq-test">Multiple Choice Questions (MCQ) </h1>
        {mcq.map((ele, i) => {
          return (
            <div className="que-box" key={ele.id}>
              <p>{`Que(${i + 1})  ${ele.que}`}</p>
              <div className="radio">
                <input
                  id="1"
                  name={ele.que}
                  type="radio"
                  onChange={() => {
                    const newSelectedAnswers = [...selectedAnswers];
                    newSelectedAnswers[i] = "A";
                    setSelectedAnswers(newSelectedAnswers);
                   
                  }}
                />
                &nbsp;&nbsp;{ele.A}
              </div>
              <br></br>
              <div className="radio">
                <input
                  id="2"
                  name={ele.que}
                  type="radio"
                  onChange={() => {
                    const newSelectedAnswers = [...selectedAnswers];
                    newSelectedAnswers[i] = "B";
                    setSelectedAnswers(newSelectedAnswers);
                  }}
                />
                &nbsp;&nbsp;{ele.B}
              </div>{" "}
              <br></br>
              <div className="radio">
                <input
                  id="3"
                  name={ele.que}
                  type="radio"
                  onChange={() => {
                    const newSelectedAnswers = [...selectedAnswers];
                    newSelectedAnswers[i] = "C";
                    setSelectedAnswers(newSelectedAnswers);
                  }}
                />
                &nbsp;&nbsp;{ele.C}
              </div>{" "}
              <br></br>
              <div className="radio">
                <input
                  id="4"
                  name={ele.que}
                  type="radio"
                  onChange={() => {
                    const newSelectedAnswers = [...selectedAnswers];
                    newSelectedAnswers[i] = "D";
                    setSelectedAnswers(newSelectedAnswers);
                  }}
                />
                &nbsp;&nbsp;{ele.D}
              </div>
              <hr className="que-row"></hr>
            </div>
          );
        })}
        <div style={{ textAlign: "center", width: "80%" }}>
          <button
            className="test-submit "
            onClick={() => {
              let newScore = 0;
              for (let i = 0; i < mcq.length; i++) {
                if (selectedAnswers[i] === mcq[i].Correct) {
                  newScore++;
                }
              }
              setScore(newScore);
              console.log(score)
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
