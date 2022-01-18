function testfunct() {
    console.log("hw")
}

function addClass() {
    const c = document.createElement("div");
    const cgbox = document.createElement("textarea");
    const chbox = document.createElement("textarea");
    c.appendChild(cgbox);
    c.appendChild(chbox);
    document.getElementById("classinfo").appendChild(c);
}

function manualgpa() {
    creditearned=0.0;
    totalhours=0.0;

    const container = document.getElementById("classinfo");
    const courses = container.getElementsByTagName("div");
    for(let i=0; i<courses.length;i++) {
        grade = courses[i].getElementsByTagName("textarea")[0].value;
        hours = courses[i].getElementsByTagName("textarea")[1].value;
        if (/\d/.test(grade) && /\d/.test(hours)) {
            creditearned+=(hours*grade);
            totalhours+=(hours*1);
            //alert("ce" + creditearned + "   th" + totalhours);
        } else {
            alert("make sure each field is a valid number");
            break;
        }
    }
    alert(creditearned/totalhours);
}

function automaticgpa(list) {
    totalhours=Number(document.getElementById("totalhours").value);
    gpa=Number(document.getElementById("currentgpa").value);
    creditearned=Number(totalhours*gpa);

    const container = document.getElementById("classinfo");
    const courses = container.getElementsByTagName("div");
    for(let i=0; i<courses.length;i++) {
        grade = courses[i].getElementsByTagName("textarea")[0].value;
        hours = courses[i].getElementsByTagName("textarea")[1].value;
        if (/\d/.test(grade) && /\d/.test(hours)) {
            creditearned+=(hours*grade);
            totalhours+=(hours*1);
            //alert("ce" + creditearned + "   th" + totalhours);
        } else {
            alert("make sure each field is a valid number");
            break;
        }
    }
    alert(creditearned/totalhours);
}