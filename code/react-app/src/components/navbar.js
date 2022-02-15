import React from 'react';
import "./navbar.css"
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div id='navbar'>
    <li id='home'>
        <Link to="/"> GPA Genie </Link>
    </li>
    <li>
      <Link to="/calculator"> GPA Calculator </Link>
    </li>
    <li>
      <Link to="/about"> About Us </Link>
    </li>
    <li>
      <Link to="/faq"> FAQ </Link>
    </li>
    <li>
      <Link to="/resources">Resources</Link>
    </li>
  </div>
  );
}
export default navbar;