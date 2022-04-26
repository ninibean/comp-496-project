import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import FAQ from "./pages/faq";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Login from "./login/Login";
import { useEffect, useState } from "react";
import { Users } from "./pages/users";
import "./pages/app.css";
import Table from "./pages/Table";



   function App() {
    const [query, setQuery] = useState("");
 const search = (data) =>{
   return data.filter((item)=> item.name.toLowerCase().includes(query));
 };
  
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <div className="app">
       <input
       type="text"
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value)}
       />
     <Table data={search(Users)} />
   </div> 
      </div>
    );
  
}

export default App;
