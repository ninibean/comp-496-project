import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "../Login";
import { studentGpa } from "../Login";

const GpaFetch = () => {
  function showresult() {
    console.log(studentGpa + " lol");
    var flavortext = "";
    if (studentGpa >= 2.0) {
      flavortext = ", you are in Academic Standing. Good job!";
    } else {
      flavortext = ", you are not in Academic Standing. Let's get to work!";
    }
    //console.log(samplestudentgpa);
    //console.log(flavortext);
    const node = document.createElement("h3");
    const textnode1 = document.createTextNode(studentGpa);
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
