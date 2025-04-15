import React from 'react';

function DataTable({ zones, onChange, getSuggestion }) {
  return (
    <table border="1" style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Zone</th>
          <th>pH</th>
          <th>Humidity (%)</th>
          <th>Moisture (%)</th>
          <th>🌿 Suggested Species</th>
        </tr>
      </thead>
      <tbody>
        {zones.map((z, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>
              <input
                type="number"
                value={z.pH}
                onChange={(e) => onChange(i, 'pH', parseFloat(e.target.value))}
              />
            </td>
            <td>
              <input
                type="number"
                value={z.humidity}
                onChange={(e) => onChange(i, 'humidity', parseFloat(e.target.value))}
              />
            </td>
            <td>
              <input
                type="number"
                value={z.moisture}
                onChange={(e) => onChange(i, 'moisture', parseFloat(e.target.value))}
              />
            </td>
            <td>{getSuggestion(z)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
