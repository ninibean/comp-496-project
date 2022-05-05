import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import ClassesLeft from "./features/ClassesLeft";
import GpaFetch from "./features/GpaFetch";
import Recommend from "./features/Recommend";
import Button from "@mui/material/Button";
import "../pages/Calculator.css";
import Appfun from "../pages/Appfun";
import NeoCalculator from "./features/NeoCalculator";

// Data other files need, must be exported later
var studentId = "";
var studentName = "";
var studentEmail = "";
var studentCourses = "";
var studentCoursesTaken = "";
var studentGpa = "";
var loggedin = false;

const Login = () => {
  const re = new RegExp(/aggies.ncat.edu$/);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  // In case of error
  const loginFail = (result) => {
    alert(result);
  };

  // Connect to Google API, store login data
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

    getAggieApi();
  };

  // Reset
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

  // Match Data
  async function getAggieApi() {
    const response = await fetch(api_url);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      if (data[i]["email"] === loginData.email) {
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
            <h3>Calculate your GPA without an account. Try it now!</h3>
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
