import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";

const GpaFetch = () => {
  let json2 = require("/Users/akin/Documents/GitHub/comp-496-project/code/react-app/src/backend/db.json");
  //console.log(json2, "the json obj");
  const samplestudentgpa = json2["studentsInfo"][31]["gpa"];
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
