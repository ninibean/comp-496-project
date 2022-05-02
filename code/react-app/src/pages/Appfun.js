import React from "react";
import { useEffect, useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./Table";



   
    function Appfun() {
        const [query, setQuery] = useState("");
        
     const search = (data) =>{
       return data.filter((item)=> item.name.toLowerCase().includes(query));
     };

    return (
      <div>
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
  };

  
  export default Appfun;
