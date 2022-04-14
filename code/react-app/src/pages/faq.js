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
                    <h3> How is my letter grade calculated?</h3>
                    <p> The GPA Genie utilizes the Academic Expectations as outlined by the North Carolina A&T State University Center for Academic Excellence:</p>
                    <Table></Table>
                    <br></br>
                </div>

                <div>
                    <h3> How is my grade calculated?</h3>
                    <p> If you are logged into the system, the GPA Genie has pulled the GPA that is on file.</p>
                    <p> If you are using the GPA Genie Calculator, GPA takes the Credits Earned (Letter Grade * Course Weight) from each class and divides that number by the total amount of hours attempted. </p>
                    <br></br>
                </div>

                

            </div>
        </div>
    );
}
export default FAQPage;