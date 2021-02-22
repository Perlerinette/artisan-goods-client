import './App.css';
import React, { useState, useEffect } from 'react';
import SiteBar from './home/Navbar';
import Routes from './home/Routes';
import Footer from './home/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import HomeGalleryParent from './products/HomeGalleryParent';

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  return (

    <div >
      <Router>
        <SiteBar clickLogout={clearToken}/>
        <Routes />
      </Router>
      <HomeGalleryParent/>
      <Footer />   


    </div>
  );
}

export default App;
