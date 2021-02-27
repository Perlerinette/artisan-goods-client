import "./App.css";
import React, { useState, useEffect } from "react";
import SiteBar from "./home/Navbar";
import Routes from "./home/Routes";
import Footer from "./home/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="pageBody">
        <Router>
          <SiteBar />
          <Routes />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
