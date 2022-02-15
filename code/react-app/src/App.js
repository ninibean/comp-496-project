import React from "react";
import { ReactDOM } from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";

class App extends React.Component {
  addClass() {
    const c = document.createElement("div");
    const cgbox = document.createElement("textarea");
    const chbox = document.createElement("textarea");
    c.appendChild(cgbox);
    c.appendChild(chbox);
    document.getElementById("classInfo").appendChild(c);
  }

  manualGPA() {
    var creditEarned = 0.0;
    var totalHours = 0.0;
    var grade;
    var hours;

    const container = document.getElementById("classInfo");
    const courses = container.getElementsByTagName("div");
    for (let i = 0; i < courses.length; i++) {
      grade = courses[i].getElementsByTagName("textarea")[0].value;
      hours = courses[i].getElementsByTagName("textarea")[1].value;
      if (/\d/.test(grade) && /\d/.test(hours)) {
        creditEarned += hours * grade;
        totalHours += hours * 1;
        //alert("ce" + creditearned + "   th" + totalhours);
      } else {
        alert("Please make sure each field is a valid number or decimal.");
        break;
      }
    }
    alert(creditEarned / totalHours);
  }

  render() {
    return (
      <div className="App">
        {/* <script type="text/javascript" src="code/react-app/public/js/script.js"></script> */}
        <p>
          {" "}
          Please click the "Add Class" button to modify data. Enter the course
          grade to the left, and the course weight on the right.
        </p>
        <p>Grade/Hours</p>
        <div id="classInfo"></div>
        {/* <input type="button" onClick="addClass()" value="Add Class"></input> */}
        <button onClick={this.addClass}> Add Class </button>
        <button onClick={this.manualGPA}> Calculate GPA </button>
        {/* <input type="button" onClick="manualGPA()" value="Calculate"></input> */}
        <Login></Login>
      </div>
    );
  }
}

export default App;
