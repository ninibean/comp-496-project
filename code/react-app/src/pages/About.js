import React from 'react';
import Cards from "../components/contactCards";
import "./About.css";


const About = () =>{
    return (
        <div className='About'>
            <div id="about-section">
                <h1> About Us</h1>
                <p> We are a group a college students that wanted to help our peers graduate. </p>
                <br></br>
                <p> The Mission of GPA Genie is to take out the guesswork of one's academic standing. 
                    With our tool, we hope it will serve as a one-stop shop where students and monitor their progress and have access to relevant helpful resources. 
                    We want to help students take control of their academic career early on so they can still graduate on time.
                </p>
            </div>

            <div id='cards'>
                <h2>Meet the Miracle Workers!</h2>
                <br></br>
                <Cards></Cards>
            </div>
        </div>
    );
}

export default About;