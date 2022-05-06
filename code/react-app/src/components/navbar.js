import React from 'react';
import "./navbar.css"
import {  Link } from "react-router-dom";


const linkStyle = {
    textDecoration: "none",
    color: 'black'
};

const navbar= () =>{
  return (
    <div id="navbar-wrapper">
        <div id='navbar'>
            <li id='home'>
                <Link to="/comp-496-project/" style={linkStyle}> 
                    <div class="logo-image">
                        <img src="images/gglogo.jpg" alt="" class="img-fluid"></img>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/comp-496-project/calculator" style={linkStyle}> GPA Calculator </Link>
            </li>
            <li>
                <Link to="/comp-496-project/about" style={linkStyle}> About Us </Link>
            </li>
            <li>
                <Link to="/comp-496-project/faq" style={linkStyle}> FAQ </Link>
            </li>
            <li>
                <Link to="/comp-496-project/resources" style={linkStyle}>Resources</Link>
            </li>
            
    </div>
    </div>
  );
}
export default navbar;