import React from "react";
import GoogleLogin from "react-google-login";
import { useState } from "react";

const ClassesLeft = () => {
  let json2 = require("/Users/akin/Documents/GitHub/comp-496-project/code/react-app/src/backend/db.json");
  //console.log(json2, "the json obj");
  //var obj = JSON.parse(json2);
  var samplestudentclasses = json2["studentsInfo"][31]["courses"];
  //console.log(samplestudentclasses);

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

  function verify(c) {
    if (samplestudentclasses.indexOf(c) == -1) {
      console.log(c);
    }
  }

  function subjectcheck(courses) {
    courses.forEach(verify);
  }

  function electivecheck(courses, n) {
    let m = 0;
    for (let i = 0; i < courses.length; i++) {
      if (samplestudentclasses.indexOf(courses[i]) != -1) {
        //console.log(courses[i]);
        m = m + 1;
        if (m == n) {
          console.log("Youve taken enough electives in this subject");
          return;
        }
      }
    }
    console.log("you need " + (n - m) + " more electives in this subject");
  }

  function sortclasses() {
    console.log("COMP NEEDED");
    subjectcheck(compcourses);
    console.log("ENG NEEDED");
    subjectcheck(engcourses);
    console.log("MATH NEEDED");
    subjectcheck(mathcourses);
    console.log("GEN ED NEEDED");
    subjectcheck(geencourses);
    console.log("PHYSICS/CHEMISTRY NEEDED");
    subjectcheck(physcourses);
    subjectcheck(chemcourses);

    console.log("MATH ELECTIVES");
    electivecheck(mathelect, 1);
    console.log("COMP ELECTIVES");
    electivecheck(compelec, 3);
    console.log("BUSINESS ELECTIVES");
    electivecheck(busnelec, 1);
    console.log("STATISTICS ELECTIVES");
    electivecheck(statelec, 1);
    console.log("SCIENCE ELECTIVES");
    electivecheck(scielect, 1);
    console.log("SOCIAL STUDIES ELECTIVES");
    electivecheck(socialelect, 1);
    console.log("AFRICAN-AMERICAN STUDIES ELECTIVES");
    electivecheck(aaelect, 1);
    console.log("GLOBAL ELECTIVES");
    electivecheck(globalelect, 1);
  }

  return (
    <div>
      <button onClick={sortclasses}>Sort Classes</button>
    </div>
  );
};

export default ClassesLeft;
