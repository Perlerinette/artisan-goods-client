import './App.css';
import SiteBar from './home/Navbar';
import React, { useState, useEffect } from 'react';
import HomeGalleryChild from './products/HomeGalleryChild';
import HomeGalleryParent from './products/HomeGalleryParent';


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
        <SiteBar clickLogout={clearToken}/>
        
        <HomeGalleryParent/>
    </div>
  );
}

export default App;
