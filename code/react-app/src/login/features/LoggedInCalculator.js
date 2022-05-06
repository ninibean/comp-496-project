import React from "react";
import Button from "@mui/material/Button";
import "../../pages/Calculator.css";
import { studentGpa, studentCoursesTaken } from "../Login";

class LoggedInCalculator extends React.Component {
  addClass() {
    // Creates the user input boxes
    const c = document.createElement("div");
    const cgbox = document.createElement("textarea");
    cgbox.setAttribute("placeholder", "Course grade");
    const chbox = document.createElement("textarea");
    chbox.setAttribute("placeholder", "Course weight");
    c.appendChild(cgbox);
    c.appendChild(chbox);
    document.getElementById("classInfo").appendChild(c);
  }

  removeClass() {
    // Removes the user input boxes
    const classFields = document.getElementById("classInfo");
    classFields.removeChild(classFields.lastElementChild);
  }

  manualGPA() {
    // Calculates the GPA and outputs the result
    document.getElementById("calculatedGPAValue").innerHTML = "";

    //var creditEarned = studentCoursesTaken.length;
    //var totalHours = creditEarned * 3.0 + 0;
    var creditEarned = 0.0;
    var totalHours = 0.0;
    var grade;
    var hours;
    var finalGPA = 0.0;

    const GPACalculation = document.createElement("div");
    document.getElementById("calculatedGPAValue").appendChild(GPACalculation);
    var staticTextTag = document.createElement("p");
    var GPATextTag = document.createElement("p");
    const container = document.getElementById("classInfo");
    const courses = container.getElementsByTagName("div");
    const GPAContainer = document.getElementById("calculatedGPAValue");

    for (let i = 0; i < courses.length; i++) {
      grade = courses[i].getElementsByTagName("textarea")[0].value;
      hours = courses[i].getElementsByTagName("textarea")[1].value;
      if (/\d/.test(grade) && /\d/.test(hours)) {
        creditEarned += hours * grade;
        totalHours += hours * 1;
      } else {
        alert("Please make sure each field is a valid number or decimal.");
        return;
      }
    }
    var total =
      (creditEarned + studentGpa * studentCoursesTaken.length) /
      (totalHours + studentCoursesTaken.length);
    finalGPA = (Math.round(total * 100) / 100).toFixed(2);
    if (isNaN(total)) {
      finalGPA = 0.0;
    }

    var finalGPAString = finalGPA.toString();
    var finalGPAText = document.createTextNode(finalGPAString);
    GPATextTag.appendChild(finalGPAText);
    GPAContainer.appendChild(staticTextTag);
    GPAContainer.appendChild(GPATextTag);

    // Changes the color of the GPA Value text based on a condition
    var col = document.getElementById("calculatedGPAValue");
    if (finalGPA < 2.0) {
      col.style.color = "#CD2026";
    } else {
      col.style.color = "green";
    }

    // checks Good Academic Standing
    var message = document.getElementById("GPAMessage");
    if (finalGPA < 2.0) {
      message.innerHTML =
        "You are not in Good Academic Standing. No worries! This is the time to get you back on track.";
    } else {
      message.innerHTML =
        "Congrats! You are in Good Academic Standing. Keep up the good work!";
    }

    // checks Dean's List Eligibility
    if (finalGPA < 3.25) {
      document.getElementById("dEligibility").innerHTML = "";
      document.getElementById("dEligibility").innerHTML +=
        "You are not eligible for earning a spot on the Dean's List.";
    } else {
      document.getElementById("dEligibility").innerHTML = "";
      document.getElementById("dEligibility").innerHTML +=
        "You are eligible for earning a spot on the Dean's List! Whoo hoo!";
    }

    // checks Chancellor's List Eligibility
    if (finalGPA < 3.75) {
      document.getElementById("cEligibility").innerHTML = "";
      document.getElementById("cEligibility").innerHTML +=
        "You are not eligible for earning a spot on the Chancellor's List.";
    } else {
      document.getElementById("cEligibility").innerHTML = "";
      document.getElementById("cEligibility").innerHTML +=
        "You are eligible for earning a spot on the Chancellor's List! Amazing!";
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="Calculator">
            <div id="instructions">
              <p> GPA Calculator </p>
            </div>
            <div id="classInfo"></div>
            <div id="buttonField">
              <Button onClick={this.addClass}> Add Class </Button>
              <Button onClick={this.manualGPA}> Calculate GPA </Button>
              <Button onClick={this.removeClass}> Remove Class </Button>
            </div>
            <div id="calculatedGPA">
              <p> Overall GPA: </p>
            </div>
            <div id="GPAMessage"></div>
            <div id="calculatedGPAValue"></div>
            <div id="cEligibility"></div>
            <div id="dEligibility"></div>
            <div id="GPAMessage"></div>
          </div>
          <div id="search bar here"></div>
        </div>
      </div>
    );
  }
}

export default LoggedInCalculator;
