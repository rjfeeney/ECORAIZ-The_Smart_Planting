import React, { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import DataTable from './components/DataTable';
import forestSpeciesDB from './components/tree_data';
// import Footer from './components/Footer';
import Header from './components/Header.js'

const defaultZones = Array(9).fill({ pH: '', humidity: '', moisture: '' });

function App() {
  const [image, setImage] = useState(null);
  const [zones, setZones] = useState(defaultZones);
  const [ranks, setRanks] = useState([]);
  const [fileSelected, setFileSelected] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setZones(defaultZones);
      setRanks([]);
      setFileSelected(true);
    } else {
      setFileSelected(false);
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...zones];
    updated[index] = { ...updated[index], [field]: parseFloat(value) || '' };
    setZones(updated);
  };

  const getForestSuggestions = (zone) => {
    const suitable = forestSpeciesDB.filter((tree) => {
      const [minPH, maxPH] = tree.pH;
      const [minHum, maxHum] = tree.humidity;
      const [minMoist, maxMoist] = tree.moisture;

      return (
        zone.pH >= minPH && zone.pH <= maxPH &&
        zone.humidity >= minHum && zone.humidity <= maxHum &&
        zone.moisture >= minMoist && zone.moisture <= maxMoist
      );
    });

    return suitable.map(t => `${t.name} (${t.role})`).join(', ') || '❌ No suitable match';
  };

  const analyze = () => {
    const scored = zones.map((z, i) => {
      let score = 0;
      if (z.pH >= 6 && z.pH <= 7.5) score++;
      if (z.humidity >= 40 && z.humidity <= 70) score++;
      if (z.moisture >= 30 && z.moisture <= 60) score++;
      return { index: i, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const rankList = Array(9).fill(null);
    scored.forEach((zone, rank) => {
      rankList[zone.index] = rank;
    });
    setRanks(rankList);
  };

  return (
    <div className="app-container">
      <Header/>
      
      <div className="main-content">
        <div className={`left-panel${fileSelected ? ' selected' : ''}`}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={`file-input${fileSelected ? ' selected' : ''}`}
          />
          {image && <ImageGrid image={image} ranks={ranks} />}
        </div>
        <div className="right-panel">
          <DataTable zones={zones} onChange={handleChange} getSuggestion={getForestSuggestions} />
          <button className="analyze-btn" onClick={analyze}>Analyze</button>
        </div>
      </div>
    {/* </div> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
