import React from "react";
import { ReactDOM } from "react-dom";
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

class App extends React.Component {
  render() {
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
      </div>
    );
  }
}

export default App;
