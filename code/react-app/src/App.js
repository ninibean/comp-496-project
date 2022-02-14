import React from 'react';
import { ReactDOM } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    addClass() {
        // Creates the user input boxes

        const c = document.createElement("div");
        const cgbox = document.createElement("textarea");
        const chbox = document.createElement("textarea");
        // const cGradeDropDown = document.createElement("select");
        // cGradeDropDown.id = "gradeSelect"
        c.appendChild(cgbox);
        c.appendChild(chbox);
        // c.appendChild(cGradeDropDown);
        document.getElementById("classInfo").appendChild(c);
    }
    
    manualGPA() {
        // Calculates the GPA and outputs the result

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
        document.getElementById("calculatedGPA").appendChild(GPACalculation);
        var staticTextTag = document.createElement("p");
        var GPATextTag = document.createElement("p");
        var staticText = document.createTextNode("Overall GPA: ");
        staticTextTag.appendChild(staticText);

    
        const container = document.getElementById("classInfo");
        const courses = container.getElementsByTagName("div");;
        const GPAContainer = document.getElementById("calculatedGPA");

        // for (let i = 0; i < gradeLetters.length; i++) {
        //     var option = document.createElement("option");
        //     option.value = gradeNumbers[i];
        //     option.text = gradeLetters[i];
        //     document.createElement("select").appendChild(option);
            
        // }

        for(let i = 0; i < courses.length; i++) {
            // courseName = courses[i].getElementsByTagName("textarea")[0].value;
            grade = courses[i].getElementsByTagName("textarea")[0].value;
            hours = courses[i].getElementsByTagName("textarea")[1].value;
            if (/\d/.test(grade) && /\d/.test(hours)) {
                creditEarned += (hours * grade);
                totalHours += (hours * 1);
                //alert("ce" + creditearned + "   th" + totalhours);
            } else {
                alert("Please make sure each field is a valid number or decimal.");
                break;
            }
        }
        // alert(Math.round(100 * (creditEarned / totalHours) / 100));
        // alert(creditEarned / totalHours);
        finalGPA = creditEarned / totalHours;
        var finalGPAString = finalGPA.toString();
        var finalGPAText = document.createTextNode(finalGPAString)
        GPATextTag.appendChild(finalGPAText);
        GPAContainer.appendChild(staticTextTag);
        GPAContainer.appendChild(GPATextTag);

    }

    render () {
        return (
            <div className="App">
                <p> Please click the "Add Class" button to modify data. Enter the course grade to the left, and the course weight on the right.</p>
                <p>Grade/Hours</p>
                <div id="classInfo"></div>
                <button onClick={this.addClass}> Add Class </button>
                <button onClick={this.manualGPA}> Calculate GPA </button>
                <div id="calculatedGPA"></div>                
            </div>
        );
    }
}

export default App;

