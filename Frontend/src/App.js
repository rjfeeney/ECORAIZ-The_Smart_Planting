import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ don't import BrowserRouter here
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/ProfilePage';
import About from './components/About';
import SoilAnalysis from './components/SoilAnalysis';
import Report from './components/Report';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignIn from './components/Signin.js';
// filepath: c:\Users\VINITH G\Documents\my projects\ECORAIZ-The_Smart_Planting\Frontend\src\index.js

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
         <Route path="/soil-analysis" element={<SoilAnalysis/>} />
         <Route path="/report" element={<Report/>} />
         <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
