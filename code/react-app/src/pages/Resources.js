import React from "react";
import Resource from "../components/resourceCards";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="Resources">
      <div id="resource-section">
        <h1> Resources </h1>
        <p>
          GPA not where you want it to be? Need help finding your advisor? Need
          to find some tutoring services? You came to the right place!
        </p>
      </div>

      <div id="resource-cards">
        <br></br>
        <Resource></Resource>
        <br></br>
      </div>
    </div>
  );
};
export default Resources;
