import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import ClassesLeft from "./features/ClassesLeft";
import GpaFetch from "./features/GpaFetch";
import Recommend from "./features/Recommend";
import "./Login.css";

const Login = () => {
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
  };
  const logout = (googleData) => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  const api_url = 'https://aggie-api-apps.herokuapp.com/studentsInfo';

async function getAggieApi(){
const response = await fetch(api_url);
const data = await response.json();
const obj1 = JSON.parse(JSON.stringify(data))
const elePrint = data[0]["name"];
console.log(data[1]["name"])
//console.log(loginData.email)
//document.getElementById("testing").textContent=elePrint;


if((data[1]["name"])  == loginData.email){
  console.log("this is NOT CORRECT")
} else{
  console.log("you are amazing")
}
}


getAggieApi();

  return (
    <div className="loginSection">
      {loginData ? (
        <div>
          <h3>You are logged in as {loginData.name}</h3>
          
          <GpaFetch></GpaFetch>
          <ClassesLeft></ClassesLeft>
          <Recommend></Recommend>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="googleButton">
          <h3 id="testing">Log in using your Aggie Email: </h3>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={login}
            onfailure={loginFail}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      )}
    </div>
  );
};

export default Login;
