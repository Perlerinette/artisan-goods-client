import './App.css';
import React, { useState, useEffect } from 'react';
import SiteBar from './home/Navbar';
import Routes from './home/Routes';
import Footer from './home/Footer';
import ProductIndex from './products/ProductIndex';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div >
      <Router>
        <SiteBar clickLogout={clearToken}/>
        <Routes />
      </Router>
      {/* Nate's module */}
      {/* <ProductIndex /> */}
      
      <Footer />   
    </div>
  );
}

export default App;
