import React from 'react';
import Table from "../components/letterGradeTable";
import "./faq.css";

const FAQPage = () =>{
    return (
        <div className='FAQ'>
            <div id="faq">
                <h2>Frequently Asked Questions</h2>
                <br></br>

                <div>
                    <h3> Which type of student would benefit most from the GPA Genie?</h3>
                    <p> As of right now, GPA Genie is for use for computer science undergraduate students attending North Carolina A&T State University.</p>
                    
                    <p> We hope to expand to other departments within the College of Engineering in the future.</p>
                    <br></br>
                </div>

                <div>
                    <h3> How is my numerical grade calculated?</h3>
                    <p> The GPA Genie utilizes the Academic Expectations as outlined by the North Carolina A&T State University Center for Academic Excellence:</p>
                    <Table></Table>
                    <br></br>
                </div>

                <div>
                    <h3> How is my overall GPA calculated?</h3>
                    <p> If you are logged into the system, the GPA Genie has pulled the GPA that is on file.</p>
                    
                    <p> If you are using the GPA Genie Calculator, GPA takes the Credits Earned (Letter Grade * Course Weight) from each class and divides that number by the total amount of hours attempted. </p>
                    <br></br>
                </div>

                <div>
                    <h3> What is Good Academic Standing?</h3>
                    <p> As defined by the North Carolina A&T State University Center for Academic Excellence, students earning a minimum 2.0 cumulative GPA are in good academic standing.</p>
                    <br></br>
                </div>

                <div>
                    <h3> What makes someone eligible for the Dean's and Chancellor's Lists? </h3>
                    <p> The following explanations are defined by the North Carolina A&T State University Center for Academic Excellence.</p>
                    <p> A full-time undergraduate student, who has earned a minimum of 12 semester hours and whose semester GPA (grade point average) is 3.25 or higher shall be eligible for the Dean's List for that semester. </p>
                    <p> A full-time undergraduate student must earn a semester grade point average (GPA) of at least 3.75 or higher in 12 or more semester hours of credit shall be eligible for the Chancellor's List for that semester. </p>
                    <br></br>
                </div>

            </div>
        </div>
    );
}
export default FAQPage;