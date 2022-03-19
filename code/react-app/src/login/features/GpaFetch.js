import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";

const GpaFetch = () => {
  let json = require("../../backend/db.json");
  //let randNum = Math.floor(Math.random() * 31);
  const samplestudentgpa = json["studentsInfo"][1]["gpa"];
  var flavortext = "";
  if (samplestudentgpa >= 3.0) {
    flavortext = "good";
  } else {
    flavortext = "bad";
  }

  function showresult() {
    console.log(samplestudentgpa);
    console.log(flavortext);
  }

  return (
    <div>
      <button onClick={showresult}>Load GPA</button>
    </div>
  );
};

export default GpaFetch;
