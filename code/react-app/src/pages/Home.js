import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
  

function Home() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/calculator`; 
        navigate(path);
    }

    return (
        <div class="Home-Page">
            <title> GPA Genie - Home </title>

            <div class='Home-Text'>
                <p> The one-stop shop to demystifying your academic progress and success </p>
                <button type='submit' onClick={routeChange} id='calcuate-button'> Calculate My GPA</button>
            </div>

            <div class="Home-Image">
                <img id='logo' src="images/test-img.png" alt="Test Logo" />
            </div>

        </div>
    );
}
export default Home;