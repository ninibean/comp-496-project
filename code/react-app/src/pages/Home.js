import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/comp-496-project/calculator`;
    navigate(path);
  };

  return (
    <div class="Home-Page">
      <title> GPA Genie - Home </title>

      <div class="Home-Text">
        <p>
          {" "}
          The one-stop shop to demystifying your academic progress and success{" "}
        </p>
        <Button onClick={routeChange} id="calculate-button">
          {" "}
          Calculate My GPA
        </Button>
      </div>

      <div class="Home-Image">
        <img id="logo" src="images/gglogo.jpg" alt="GPA Genie Logo" />
      </div>
    </div>
  );
}
export default Home;
