var creditEarned = 0.0;
var totalHours = 0.0;
var grade;
var hours;
var gpa;


// just a test function
function testFunct() {
    console.log("hw")
}

function addClass() {
    const c = document.createElement("div");
    const cgbox = document.createElement("textarea");
    const chbox = document.createElement("textarea");
    c.appendChild(cgbox);
    c.appendChild(chbox);
    document.getElementById("classInfo").appendChild(c);
}

function manualGPA() {
    creditEarned=0.0;
    totalHours=0.0;

    const container = document.getElementById("classInfo");
    const courses = container.getElementsByTagName("div");
    for(let i = 0; i < courses.length; i++) {
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
    alert(creditEarned / totalHours);
}

function automaticGPA(list) {
    totalHours = Number(document.getElementById("totalhours").value);
    gpa = Number(document.getElementById("currentgpa").value);
    creditEarned = Number(totalHours * gpa);

    const container = document.getElementById("classInfo");
    const courses = container.getElementsByTagName("div");
    for(let i=0; i<courses.length;i++) {
        grade = courses[i].getElementsByTagName("textarea")[0].value;
        hours = courses[i].getElementsByTagName("textarea")[1].value;
        if (/\d/.test(grade) && /\d/.test(hours)) {
            creditEarned+=(hours*grade);
            totalHours+=(hours*1);
            //alert("ce" + creditearned + "   th" + totalhours);
        } else {
            alert("make sure each field is a valid number");
            break;
        }
    }
    alert(creditEarned / totalHours);
}