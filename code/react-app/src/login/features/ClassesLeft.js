import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import Button from "@mui/material/Button";
import { studentCoursesTaken } from "../Login";

const ClassesLeft = () => {
  var samplestudentclasses = studentCoursesTaken;
  var result = [];

  const compcourses = [
    "COMP121",
    "COMP163",
    "COMP167",
    "COMP180",
    "COMP200",
    "COMP267",
    "COMP280",
    "COMP285",
    "COMP300",
    "COMP322",
    "COMP350",
    "COMP360",
    "COMP365",
    "COMP375",
    "COMP385",
    "COMP390",
    "COMP410",
    "COMP476",
    "COMP496",
  ];
  const compelec = [
    "COMP301",
    "COMP320",
    "COMP321",
    "COMP323",
    "COMP340",
    "COMP356",
    "COMP361",
    "COMP363",
    "COMP367",
    "COMP368",
    "COMP370",
    "COMP397",
    "COMP398",
    "COMP411",
    "COMP421",
    "COMP422",
    "COMP423",
    "COMP495",
  ];
  const engcourses = ["ENGL100", "ENGL101", "ENGL331"];
  const mathcourses = ["MATH131", "MATH132", "MATH341"];
  const mathelect = ["MATH340", "MATH351"];
  const geencourses = ["GEEN111", "SPCH250"];
  const busnelec = ["MGMT110", "MGMT132", "MKTG230", "ECON200", "ECON201"];
  const statelec = ["MATH224", "ISEN370", "ECEN356"];
  const physcourses = ["PHYS241", "PHYS242", "PHYS251", "PHYS252"];
  const chemcourses = ["CHEM106", "CHEM107", "CHEM116", "CHEM117"];
  const scielect = ["BIOL100", "BIOL101", "SLMG200"];
  const socialelect = [
    "BUED279",
    "ECON200",
    "ECON201",
    "FCS135",
    "FCS181",
    "FCS260",
    "HIST103",
    "HIST104",
    "HIST105",
    "HIST106",
    "HIST107",
    "HIST130",
    "HIST206",
    "HIST207",
    "HIST216",
    "HIST231",
    "JOMC240",
    "POLI110",
    "PSYC101",
    "SOCI100",
    "SOCI200",
    "SSFM226",
  ];
  const aaelect = [
    "ENGL 333",
    "ENGL 334",
    "HIST 103",
    "HIST 106",
    "HIST 107",
    "LIBS 202",
    "MUSI 220",
  ];
  const globalelect = [
    "HIST 130",
    "HIST 206",
    "HIST 207",
    "HIST 216",
    "HIST 231",
    "MGMT 221",
    "PHIL 103",
    "PHIL 201",
  ];

  function listOutputProtocol(list, subject) {
    const nodet = document.createElement("h5");
    const textnode1t = document.createTextNode(
      "You still need to take one of these " + subject + " courses:"
    );
    nodet.appendChild(textnode1t);
    const nodebrt = document.createElement("br");
    document.getElementById("cl-result").appendChild(nodet);
    nodet.appendChild(nodebrt);

    let table = document.createElement("table");

    let tbody = document.createElement("tbody");

    let i = 0;
    let variable_for_table_formatting = list.length % 3;
    while (i < list.length - variable_for_table_formatting) {
      let newrow = document.createElement("tr");
      let cellone = document.createElement("td");
      cellone.innerHTML = list[i];
      let celltwo = document.createElement("td");
      celltwo.innerHTML = list[i + 1];
      let cellthree = document.createElement("td");
      cellthree.innerHTML = list[i + 2];

      newrow.appendChild(cellone);
      newrow.appendChild(celltwo);
      newrow.appendChild(cellthree);
      tbody.appendChild(newrow);
      i += 3;
    }

    if (variable_for_table_formatting == 2) {
      let finalrow = document.createElement("tr");
      let fcellone = document.createElement("td");
      fcellone.innerHTML = list[list.length - 2];
      let fcelltwo = document.createElement("td");
      fcelltwo.innerHTML = list[list.length - 1];
      finalrow.appendChild(fcellone);
      finalrow.appendChild(fcelltwo);
      tbody.appendChild(finalrow);
    } else if (variable_for_table_formatting == 1) {
      let finalrow = document.createElement("tr");
      let fcellone = document.createElement("td");
      fcellone.innerHTML = list[list.length - 2];
      finalrow.appendChild(fcellone);
      tbody.appendChild(finalrow);
    }

    table.appendChild(tbody);
    document.getElementById("cl-result").appendChild(table);
  }

  function subjectcheck(courses, subject) {
    listOutputProtocol(courses, subject);
  }

  function electivecheck(courses, n) {
    let m = 0;
    for (let i = 0; i < courses.length; i++) {
      if (samplestudentclasses.indexOf(courses[i]) != -1) {
        //console.log(courses[i]);
        m = m + 1;
        if (m == n) {
          result.push("You have taken enough electives in this subject.");
          return;
        }
      }
    }
    result.push("You need " + (n - m) + " more electives in this subject.");
  }

  function sortclasses() {
    document.getElementById("cl-result").textContent = "";
    result.push("Computer Science credit still needed:");
    subjectcheck(compcourses, "Computer Science");
    result.push("ENG NEEDED:");
    subjectcheck(engcourses, "English");
    result.push("MATH NEEDED:");
    subjectcheck(mathcourses, "Math");
    result.push("GEN ED NEEDED:");
    subjectcheck(geencourses, "General");
    result.push("PHYSICS/CHEMISTRY NEEDED:");
    subjectcheck(physcourses, "Physics");
    subjectcheck(chemcourses, "Chemistry");

    result.push("MATH ELECTIVES:");
    electivecheck(mathelect, 1);
    result.push("COMP ELECTIVES:");
    electivecheck(compelec, 3);
    result.push("BUSINESS ELECTIVES:");
    electivecheck(busnelec, 1);
    result.push("STATISTICS ELECTIVES:");
    electivecheck(statelec, 1);
    result.push("SCIENCE ELECTIVES:");
    electivecheck(scielect, 1);
    result.push("SOCIAL STUDIES ELECTIVES:");
    electivecheck(socialelect, 1);
    result.push("AFRICAN-AMERICAN STUDIES ELECTIVES:");
    electivecheck(aaelect, 1);
    result.push("GLOBAL ELECTIVES:");
    electivecheck(globalelect, 1);
  }

  return (
    <div id="cl-section">
      <Button onClick={sortclasses}>Needed Classes</Button>
      <div id="cl-result"></div>
    </div>
  );
};

export default ClassesLeft;
