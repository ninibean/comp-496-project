import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../Login.css";
import { studentCoursesTaken } from "../Login";

const Recommend = () => {
  let cleft = [];
  //let json3 = require("https://aggie-api-apps.herokuapp.com/studentsInfo");
  //console.log(json3);
  //let json = require("../../backend/db.json");
  const samplestudentclasses = studentCoursesTaken;

  const classes = [
    "COMP121",
    "COMP163",
    "ENG100",
    "GEEN111",
    "MATH131",
    [
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
    ], //
    "COMP167",
    "COMP180",
    "MATH132",
    "ENG101",
    [
      "ENGL 333",
      "ENGL 334",
      "HIST 103",
      "HIST 106",
      "HIST 107",
      "LIBS 202",
      "MUSI 220",
    ], //
    "COMP280",
    "SPCH250",
    "MATH341",
    ["MGMT110", "MGMT132", "MKTG230", "ECON200", "ECON201"],
    "CHEM106",
    "CHEM116", //
    "COMP200",
    "COMP267",
    "COMP285",
    ["MATH340", "MATH351"],
    "CHEM107",
    "CHEM117",
    [
      "HIST 130",
      "HIST 206",
      "HIST 207",
      "HIST 216",
      "HIST 231",
      "MGMT 221",
      "PHIL 103",
      "PHIL 201",
    ], //
    "COMP360",
    "COMP375",
    ["MATH224", "ISEN370", "ECEN356"],
    ["BIOL100", "BIOL101", "SLMG200"],
    //
    "COMP300",
    "COMP322",
    "COMP350",
    "COMP365",
    "COMP390",
    "ENG331",
    //
    "COMP385",
    "COMP410",
    "COMP476",
    //
    [
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
    ],
    "COMP496",
  ];

  function singleOutputProtocol(course) {
    const nodet = document.createElement("h5");
    const textnode1t = document.createTextNode(course);
    nodet.appendChild(textnode1t);
    const nodebrt = document.createElement("br");
    document.getElementById("r-result").appendChild(nodet);
    nodet.appendChild(nodebrt);
  }

  function listOutputProtocol(list) {
    const nodet = document.createElement("h5");
    const textnode1t = document.createTextNode(
      "Choose one of the following for an elective slot:"
    );
    nodet.appendChild(textnode1t);
    const nodebrt = document.createElement("br");
    document.getElementById("r-result").appendChild(nodet);
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
      fcelltwo.innerHTML = list[-1];
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

    // Adding the entire table to the body tag
    document.getElementById("r-result").appendChild(table);

    /*
    var x = document.createElement("ul");
    x.setAttribute("id", "myUL");
    document.getElementById("r-result").appendChild(x);

    for (let i = 0; i < list.length; i++) {
      var y = document.createElement("LI");
      var t = document.createTextNode(list[i]);
      y.appendChild(t);
      document.getElementById("myUL").appendChild(y);
    }*/
  }

  function outputProtocol() {
    document.getElementsByClassName("r-result").innerHTML = "";
    const titleNode = document.createElement("h3");
    const titleNodeText = document.createTextNode(
      "Heres a suggeted list of courses to sign up for next semester:"
    );
    titleNode.appendChild(titleNodeText);
    document.getElementById("r-result").innerHTML = "";
    document.getElementById("r-result").appendChild(titleNode);

    for (let i = 0; i < cleft.length; i++) {
      if (cleft[i].constructor !== Array) {
        singleOutputProtocol(cleft[i]);
      } else {
        listOutputProtocol(cleft[i]);
      }
    }

    //const node = document.createElement("h5");
    //for (let i = 0; i < cleft.length; i++) {
    //  const textnode1 = document.createTextNode(cleft[i]);
    //  node.appendChild(textnode1);
    //  const nodebr = document.createElement("br");
    //document.getElementById("r-result").innerHTML = "";
    //  document.getElementById("r-result").appendChild(node);
    //  node.appendChild(nodebr);
    //}
    cleft = [];
  }

  function recommendClasses() {
    let count = 0;
    for (let i = 0; i < classes.length; i++) {
      //console.log(classes[i]);
      if (classes[i].constructor === Array) {
        if (classes[0] == "COMP301") {
        } else {
          for (let j = 0; j < classes[i].length; j++) {
            if (samplestudentclasses.indexOf(classes[i][j]) == -1) {
              //console.log("One of the following: " + classes[i] + "");
              cleft.push(classes[i]);
              count = count + 1;
              if (count >= 5) {
                outputProtocol();
                return cleft;
              }
              break;
            }
          }
        }
      } else {
        if (samplestudentclasses.indexOf(classes[i]) == -1) {
          cleft.push(classes[i]);
          count = count + 1;
          if (count >= 5) {
            outputProtocol();
            return cleft;
          }
        }
      }
    }
    outputProtocol();
    return cleft;
  }

  return (
    <div id="r-section">
      <Button onClick={recommendClasses}>Recommend Classes</Button>
      <div id="r-result"></div>
    </div>
  );
};

export default Recommend;
