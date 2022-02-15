import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";

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

  return (
    <div className="loginSection">
      {loginData ? (
        <div>
          <h3>You logged in as {loginData.email}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Log in with your Aggie email</h1>
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
