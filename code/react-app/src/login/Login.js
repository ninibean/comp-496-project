import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import ClassesLeft from "./features/ClassesLeft";
import GpaFetch from "./features/GpaFetch";
import Recommend from "./features/Recommend";
import Button from "@mui/material/Button";
import "../pages/Calculator.css";

/*
const jsonData = require("https://aggie-api-apps.herokuapp.com/studentsInfo");
const express = require("express");
const app = express();

app.get("/quiz", (req, res) => {
  res.json(jsonData);
});

app.serve(3000);*/
var studentId = "";
var studentName = "";
var studentEmail = "";
var studentCourses = "";
var studentCoursesTaken = "";
var studentGpa = "";

const Login = () => {
  var atypes = false;

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

   
    const api_url = 'https://aggie-api-apps.herokuapp.com/studentsInfo';
    
    async function getAggieApi(){
    const response = await fetch(api_url);
    const data = await response.json();
    const obj1 = JSON.parse(JSON.stringify(data))
    const elePrint = data[2]["name"];
    console.log(elePrint)
    //document.getElementById("testing").textContent=elePrint;
    
    }
    
    
    getAggieApi();
    
    
    
    
       

    //
    //
    /*
    console.log(loginData.email);
    //const st = loginData.email + "";

    var regx = new RegExp("^adma");

    console.log(loginData.email.toString().match(regx));
    if (loginData.email.search("ad") > -1) {
      atypes = true;
    }

    if (regx.exec("adma")) {
      atypes = true;
      if (atypes) console.log("wdqd");
    }

    let lol = "lol";
    var regx2 = new RegExp("lol");
    if (regx2.match("lol")) {
      atypes = true;
      if (atypes) console.log("wdd");
    }*/

    //console.log("ahhahah");
    //var emailv = loginData.email;
    //var emailvpt2 = JSON.stringify(emailv);
    //console.log("ahhahah2");
    //console.log(JSON.stringify(loginData.email));

    //console.log(emailvpt2);
    //if (JSON.stringify(loginData.email).search("aggies.ncat.edu") > -1) {
    //  console.log("usethis");
    //  atypes = true;
    //}
  };

  const logout = (googleData) => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  function stuorprof() {
    //console.log("ahhahah");
    //var emailv = loginData.email;
    //var emailvpt2 = JSON.stringify(emailv);
    //console.log("ahhahah2");
    //console.log(JSON.stringify(loginData.email));
    //console.log(emailvpt2);
    //if (JSON.stringify(loginData.email).search("aggies.ncat.edu") > -1) {
    //  console.log("usethis");
    //  atypes = true;
    //}
    return false;
  }

  const api_url = "https://aggie-api-apps.herokuapp.com/studentsInfo";

  async function getAggieApi() {
    const response = await fetch(api_url);
    const data = await response.json();
    const obj1 = JSON.parse(JSON.stringify(data));
    //var thisStudent = -1;
    //console.log(elePrint);

    for (let i = 0; i < data.length; i++) {
      if (data[i]["email"] == loginData.email) {
        //thisStudent=i;
        studentId = data[i]["id"];
        studentName = data[i]["name"];
        studentEmail = data[i]["email"];
        studentCourses = data[i]["courses"];
        studentCoursesTaken = data[i]["taken"];
        studentGpa = data[i]["gpa"];
        /*console.log(
          studentId +
            studentName +
            studentEmail +
            studentCourses +
            studentCoursesTaken +
            studentGpa
        );*/
        break;
      }
    }

    //document.getElementById("testing").textContent = elePrint;
  }

  
    if ('loginData.email' =='dalaw@aggies.ncat.edu') {
      document.getElementsByClassName("testing").textContent='werido';
    }else{
      document.getElementsByClassName("testing").textContent='ewwww';
    }
  
   

  
 
  getAggieApi();

  return (
    <div className="loginSection">
      <div id="loginDiv">
        {loginData ? (
          stuorprof ? (
            <div>
              <GpaFetch></GpaFetch>
              <ClassesLeft></ClassesLeft>
              <Recommend></Recommend>
              <div className="output-area"></div>
              <div className="testing"> </div>

              <Button onClick={logout}>Logout</Button>
              <h3> Welcome, {loginData.email}! You are logged in as a student.</h3>
            </div>
          ) : (
            <div>
              <Button onClick={logout}>Logout</Button>
              <h3> Welcome, {loginData.email}! You are logged in as a professor.</h3>
            </div>
          )
        ) : (
          <div className="googleButton">
            <h4>Log in using your Aggie Email:
                <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Log in with Google"
                onSuccess={login}
                onfailure={loginFail}
                cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
            </h4>
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
};
export default Login;
