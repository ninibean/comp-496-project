import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import ClassesLeft from "./features/ClassesLeft";
import GpaFetch from "./features/GpaFetch";
import Recommend from "./features/Recommend";
import Button from "@mui/material/Button";
import "../pages/Calculator.css";
import { render } from "react-dom";
import Appfun from "../pages/Appfun";
import Calculator from "../pages/Calculator";
import NeoCalculator from "./features/NeoCalculator";

var studentId = "";
var studentName = "";
var studentEmail = "";
var studentCourses = "";
var studentCoursesTaken = "";
var studentGpa = "";
var loggedin = false;

const Login = () => {
  var atypes = false;
  const re = new RegExp(/aggies.ncat.edu$/);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const loginFail = (result) => {
    alert(result);
  };

  const login = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));

    const api_url = "https://aggie-api-apps.herokuapp.com/studentsInfo";

    async function getAggieApi() {
      const response = await fetch(api_url);
      const data = await response.json();
    }

    getAggieApi();
  };

  const logout = (googleData) => {
    localStorage.removeItem("loginData");
    setLoginData(null);
    studentId = "";
    studentName = "";
    studentEmail = "";
    studentCourses = "";
    studentCoursesTaken = "";
    studentGpa = "";
    loggedin = false;
  };

  const api_url = "https://aggie-api-apps.herokuapp.com/studentsInfo";

  async function getAggieApi() {
    const response = await fetch(api_url);
    const data = await response.json();
    const obj1 = JSON.parse(JSON.stringify(data));

    for (let i = 0; i < data.length; i++) {
      if (data[i]["email"] == loginData.email) {
        studentId = data[i]["id"];
        studentName = data[i]["name"];
        studentEmail = data[i]["email"];
        studentCourses = data[i]["courses"];
        studentCoursesTaken = data[i]["taken"];
        studentGpa = data[i]["gpa"];
        loggedin = true;
        break;
      }
    }
  }

  getAggieApi();

  return (
    <div className="loginSection">
      <div id="loginDiv">
        {loginData ? (
          loginData.email.match(re) ? (
            <div>
              <NeoCalculator></NeoCalculator>
              <GpaFetch></GpaFetch>
              <ClassesLeft></ClassesLeft>
              <Recommend></Recommend>
              <div className="output-area"></div>

              <Button onClick={logout}>Logout</Button>
              <h3>
                {" "}
                Welcome, {loginData.email}! You are logged in as a student.
              </h3>
            </div>
          ) : (
            <div>
              <Appfun></Appfun>
              <Button onClick={logout}>Logout</Button>
              <h3>
                {" "}
                Welcome, {loginData.email}! You are logged in as a professor.
              </h3>
            </div>
          )
        ) : (
          <div>
            <h4>QuickCalc (Quick Calculation w/o requiring an account):</h4>
            <NeoCalculator></NeoCalculator>
            <div className="googleButton">
              <h4>
                Or Log in using your Aggie Email:
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Log in with Google"
                  onSuccess={login}
                  onfailure={loginFail}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export {
  studentId,
  studentName,
  studentEmail,
  studentCourses,
  studentCoursesTaken,
  studentGpa,
  loggedin,
};
export default Login;
