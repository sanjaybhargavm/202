import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, BarChart, YAxis, XAxis, Tooltip, Legend } from 'recharts';

const AllStats = () => {
  const [location, setLocation] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [totalTime, setTotalTime] = useState([]);

  useEffect(() => {
    async function fetchData() {
    try {
      const response = await axios.post('/hourschart', { location, timePeriod });
      setTotalTime([{ label: "Total Time", value: response.data.totalTime }]);
    } catch(err) {
      console.error(err);
    }
  }
    fetchData();
  }, [location, timePeriod]);

  const handleChange = (e) => {
      setTimePeriod(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
};


  return (
    <div style={{ position: 'relative',
    left: '20px',
    border: '3px',width: '500px', backgroundColor: '#fff', borderRadius: '6px', padding: '0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }}>
      <h2>User Statistics</h2>
      <div>
      <label>Location:</label>
      <select value={location} onChange={handleLocationChange} style={{ fontSize: 16, fontFamily: 'Arial', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f2f2f2' }}>
        <option value="San Jose Downtown">San Jose</option>
        <option value="Fremont">Fremont</option>
        <option value="Santa Clara">Santa Clara</option>
      </select>
        <label>Time Period:</label>
        <select name="timePeriod" value={timePeriod} onChange={handleChange}>
          <option value="1 day">1 Day</option>
          <option value="1 week">1 Week</option>
          <option value="1 month">1 Month</option>
          <option value="90 days">90 Days</option>
        </select>
      </div>
      {totalTime.length ? (
      <BarChart width={400} height={400} data={totalTime}>
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#b2cfb4" />
    </BarChart>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default AllStats;
