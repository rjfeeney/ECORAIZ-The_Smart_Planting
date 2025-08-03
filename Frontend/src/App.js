import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ don't import BrowserRouter here
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/ProfilePage';
import About from './components/About';
import Soil_Analysis from './components/Soil_Analysis';
import Report from './components/Report';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
         <Route path="/soil-analysis" element={<Soil_Analysis/>} />
         <Route path="/report" element={<Report/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
