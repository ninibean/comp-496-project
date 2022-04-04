import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import Button from "@mui/material/Button";

const GpaFetch = () => {
  let json = require("../../backend/db.json");
  const samplestudentgpa = json["studentsInfo"][31]["gpa"];
  var flavortext = "";
  if (samplestudentgpa >= 3.0) {
    flavortext = ", which is good";
  } else {
    flavortext = ", which is bad";
  }

  function showresult() {
    //console.log(samplestudentgpa);
    //console.log(flavortext);
    const node = document.createElement("h3");
    const textnode1 = document.createTextNode(samplestudentgpa);
    const textnode2 = document.createTextNode(flavortext);
    node.appendChild(textnode1);
    node.appendChild(textnode2);
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").appendChild(node);
  }

  return (
    <div>
      <Button onClick={showresult}>Load GPA</Button>
      <div id="result"></div>
    </div>
  );
};

export default GpaFetch;
