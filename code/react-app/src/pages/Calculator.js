import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Calculator.css";
import Login from "../login/Login.js";

class Calculator extends React.Component {
  addClass() {
    // Creates the user input boxes

    const c = document.createElement("div");
    const cgbox = document.createElement("textarea");
    cgbox.setAttribute("placeholder", "Enter course grade");
    const chbox = document.createElement("textarea");
    chbox.setAttribute("placeholder", "Enter course weight");
    // const cGradeDropDown = document.createElement("select");
    // cGradeDropDown.id = "gradeSelect"
    c.appendChild(cgbox);
    c.appendChild(chbox);
    // c.appendChild(cGradeDropDown);
    document.getElementById("classInfo").appendChild(c);
  }

  manualGPA() {
    // Calculates the GPA and outputs the result
    document.getElementById("calculatedGPAValue").innerHTML = "";

    // TODO: turn dropdown menu into a component
    var creditEarned = 0.0;
    var totalHours = 0.0;
    var grade;
    var hours;
    var finalGPA = 0.0;
    // var gradeLetters = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"]
    // var gradeNumbers = [4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.0]
    // var courseName;

    const GPACalculation = document.createElement("div");
    document.getElementById("calculatedGPAValue").appendChild(GPACalculation);
    var staticTextTag = document.createElement("p");
    var GPATextTag = document.createElement("p");
    // var staticText = document.createTextNode("Overall GPA: ");
    // staticTextTag.appendChild(staticText);

    const container = document.getElementById("classInfo");
    const courses = container.getElementsByTagName("div");
    const GPAContainer = document.getElementById("calculatedGPAValue");

    // for (let i = 0; i < gradeLetters.length; i++) {
    //     var option = document.createElement("option");
    //     option.value = gradeNumbers[i];
    //     option.text = gradeLetters[i];
    //     document.createElement("select").appendChild(option);

    // }

    for (let i = 0; i < courses.length; i++) {
      // courseName = courses[i].getElementsByTagName("textarea")[0].value;
      grade = courses[i].getElementsByTagName("textarea")[0].value;
      hours = courses[i].getElementsByTagName("textarea")[1].value;
      if (/\d/.test(grade) && /\d/.test(hours)) {
        creditEarned += hours * grade;
        totalHours += hours * 1;
      } else {
        alert("Please make sure each field is a valid number or decimal.");
        break;
      }
    }
    var total = creditEarned / totalHours;
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
    if (finalGPA < 3.0) {
      col.style.color = "#CD2026";
    } else {
      col.style.color = "green";
    }
  }

  render() {
    return (
      <div className="Calculator">
        <div id="instructions">
          <p> GPA Calculator </p>
        </div>
        <div id="classInfo"></div>
        <div id="buttonField">
          <Button onClick={this.addClass}> Add Class </Button>
          <Button onClick={this.manualGPA}> Calculate GPA </Button>
        </div>
        <div id="calculatedGPA">
          <p> Overall GPA: </p>
        </div>
        <div id="calculatedGPAValue"></div>
        <div id="loginstuff">
          <Login></Login>
        </div>
      </div>
    );
  }
}

export default Calculator;
