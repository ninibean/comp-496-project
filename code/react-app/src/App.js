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

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/comp-496-project" element={<Home />} />
          <Route path="/comp-496-project/calculator" element={<Calculator />} />
          <Route path="/comp-496-project/about" element={<About />} />
          <Route path="/comp-496-project/faq" element={<FAQ />} />
          <Route path="/comp-496-project/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
