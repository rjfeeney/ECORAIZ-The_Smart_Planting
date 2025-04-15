import React, { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import DataTable from './components/DataTable';

const defaultZones = Array(9).fill({ pH: '', humidity: '', moisture: '' });

function App() {
  const [image, setImage] = useState(null);
  const [zones, setZones] = useState(defaultZones);
  const [ranks, setRanks] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
    setZones(defaultZones);
    setRanks([]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...zones];
    updated[index] = { ...updated[index], [field]: parseFloat(value) || '' };
    setZones(updated);
  };

  const forestSpeciesDB = [
    {
      name: 'Neem Tree 🌳',
      role: 'Medicinal, air purification',
      lifespan: '100+ years',
      pH: [6.0, 8.0],
      humidity: [30, 60],
      moisture: [20, 40],
    },
    {
      name: 'Banyan Tree 🌳',
      role: 'Shade provider, sacred, biodiversity hub',
      lifespan: '200+ years',
      pH: [6.0, 7.5],
      humidity: [50, 90],
      moisture: [40, 70],
    },
    {
      name: 'Peepal Tree 🌿',
      role: 'Oxygen producer, sacred',
      lifespan: '150+ years',
      pH: [6.0, 7.5],
      humidity: [30, 70],
      moisture: [20, 50],
    },
    {
      name: 'Teak Tree 🌲',
      role: 'Timber, canopy coverage',
      lifespan: '100+ years',
      pH: [6.5, 7.5],
      humidity: [40, 70],
      moisture: [30, 50],
    },
    {
      name: 'Jamun Tree 🍇',
      role: 'Fruit-bearing, wildlife support',
      lifespan: '80–100 years',
      pH: [6.0, 7.5],
      humidity: [60, 85],
      moisture: [30, 60],
    },
    {
      name: 'Mango Tree 🥭',
      role: 'Fruit, shade, bird support',
      lifespan: '100–150 years',
      pH: [6.0, 7.5],
      humidity: [50, 80],
      moisture: [40, 60],
    },
    {
      name: 'Indian Rosewood 🌸',
      role: 'Timber, medicinal, canopy',
      lifespan: '100–120 years',
      pH: [6.0, 8.0],
      humidity: [40, 80],
      moisture: [30, 60],
    },
    {
      name: 'Bael Tree 🍐',
      role: 'Medicinal, fruit-bearing',
      lifespan: '100+ years',
      pH: [6.0, 8.0],
      humidity: [40, 70],
      moisture: [30, 50],
    },
    {
      name: 'Indian Mahogany 🌳',
      role: 'Hardwood, biodiversity',
      lifespan: '120+ years',
      pH: [6.0, 7.5],
      humidity: [60, 85],
      moisture: [40, 65],
    },
    {
      name: 'Sandalwood Tree 🌳',
      role: 'Medicinal, aromatic wood',
      lifespan: '100–200 years',
      pH: [6.0, 7.0],
      humidity: [40, 70],
      moisture: [30, 50],
    },
    {
      name: 'Arjuna Tree 🌳',
      role: 'Water bank stabilizer, medicinal',
      lifespan: '100+ years',
      pH: [6.0, 7.5],
      humidity: [40, 80],
      moisture: [30, 60],
    },
    {
      name: 'Rudraksha Tree 🔮',
      role: 'Spiritual, shade',
      lifespan: '100+ years',
      pH: [6.0, 7.5],
      humidity: [50, 85],
      moisture: [30, 50],
    },
    {
      name: 'Sal Tree 🌳',
      role: 'Sacred, hardwood, forest native',
      lifespan: '100–150 years',
      pH: [5.5, 7.0],
      humidity: [60, 80],
      moisture: [40, 60],
    },
    {
      name: 'Jackfruit Tree 🌳',
      role: 'Fruit, shade, support birds',
      lifespan: '100+ years',
      pH: [6.0, 7.5],
      humidity: [50, 80],
      moisture: [40, 60],
    },
    {
      name: 'Deodar Cedar 🌲',
      role: 'Windbreak, canopy, sacred',
      lifespan: '200+ years',
      pH: [6.0, 7.5],
      humidity: [50, 80],
      moisture: [30, 60],
    },
    {
      name: 'Chestnut Tree 🌰',
      role: 'Nut bearing, wildlife support',
      lifespan: '200+ years',
      pH: [5.5, 7.5],
      humidity: [40, 70],
      moisture: [30, 60],
    },
    {
      name: 'Oak Tree 🌳',
      role: 'Biodiversity shelter, large canopy',
      lifespan: '200+ years',
      pH: [5.5, 7.0],
      humidity: [50, 80],
      moisture: [40, 70],
    },
    {
      name: 'Cork Tree 🌲',
      role: 'Fire-resistant, bark use',
      lifespan: '100+ years',
      pH: [6.0, 7.0],
      humidity: [30, 60],
      moisture: [20, 50],
    },
    {
      name: 'Tamarind Tree 🌳',
      role: 'Fruit, shade, medicinal',
      lifespan: '80–100 years',
      pH: [6.0, 8.0],
      humidity: [50, 80],
      moisture: [40, 60],
    },
    {
      name: 'Khejri Tree 🌿',
      role: 'Desert stabilizer, sacred',
      lifespan: '100–120 years',
      pH: [7.0, 8.5],
      humidity: [20, 60],
      moisture: [10, 30],
    }
    // You can copy & extend more entries similarly to reach 40+
  ];
  

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
    <div className="app">
    <h1>🌱 Ecoraiz – Reforestation Zone Planner</h1>
    <p>Upload a valley map, enter environmental data zone-wise, and get ideal forest species suggestions to protect biodiversity and rebuild ecosystems.</p>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="layout">
        {image && <ImageGrid image={image} ranks={ranks} />}
        <DataTable zones={zones} onChange={handleChange} getSuggestion={getForestSuggestions}/>


      </div>
      <button onClick={analyze}>Analyze</button>
    </div>
  );
}

export default App;
