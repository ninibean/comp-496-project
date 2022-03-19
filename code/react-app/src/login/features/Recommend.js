import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";

const Recommend = () => {
  let json = require("../../backend/db.json");
  const samplestudentclasses = json["studentsInfo"][31]["courses"];
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

  function recommendClasses() {
    let count = 0;
    let cleft = [];
    for (let i = 0; i < classes.length; i++) {
      //console.log(classes[i]);
      if (classes[i].constructor === Array) {
        if (classes[0] == "COMP301") {
        } else {
          for (let j = 0; j < classes[i].length; j++) {
            if (samplestudentclasses.indexOf(classes[i][j]) == -1) {
              //console.log("One of the following: " + classes[i] + "");
              cleft.push("One of the following: " + classes[i] + "");
              count = count + 1;
              if (count >= 5) {
                console.log(cleft);
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
            console.log(cleft);
            return cleft;
          }
        }
      }
    }
    console.log(cleft);
    return cleft;
  }

  return (
    <div>
      <button onClick={recommendClasses}>Recommend Classes</button>
    </div>
  );
};

export default Recommend;
