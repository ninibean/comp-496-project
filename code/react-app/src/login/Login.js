import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import ClassesLeft from "./features/ClassesLeft";
import GpaFetch from "./features/GpaFetch";
import Recommend from "./features/Recommend";
//import "./Login.css";
import Button from "@mui/material/Button";
import "../pages/Calculator.css";

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

                <Button onClick={logout}>Logout</Button>
                <h3>You are logged in as {loginData.email}, a student account</h3>
            </div>
            ) : (
            <div>
                <Button onClick={logout}>Logout</Button>
                <h3>You are logged in as {loginData.email}, a professor account</h3>
            </div>
            )
        ) : (
            <div className="googleButton">
                <h3>Log in using your Aggie Email: </h3>
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
    </div>
  );
};

export default Login;
