import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ don't import BrowserRouter here
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/ProfilePage';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/soil-analysis" element={<SoilAnalysis />} /> */}
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
