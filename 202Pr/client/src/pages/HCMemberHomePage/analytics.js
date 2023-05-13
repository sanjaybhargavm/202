import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, ResponsiveContainer } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

function AnalyticsDashboard() {
  const [location, setLocation] = useState('San Jose');
  const [chartData, setChartData] = useState(null);
  const [timeRange, setTimeRange] = useState('1 day');
  const [defaultLocation, setDefaultLocation] = useState(false);
  const [range, setRange] = useState();

  Chart.register(CategoryScale);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('/barchart', { location });
        setChartData(response.data.data);
      } catch(error) {
        console.error(error);
      }
    }
    fetchData();
  }, [location]);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
    let r;
    if (event.target.value=="1 day"){
      setRange(1);
      r=1;
    }
    else if (event.target.value=="1 week"){
      setRange(7)
      r=7;
    }
    else{
      setRange(90)
      r=90;
    }
    const startDate=new Date();
    let endDate=new Date();
    endDate.setDate(endDate.getDate() - r);

    console.log("range"+r)
    console.log(startDate+"   ---->   "+endDate)
    const fetchData = async () => {
      const response = await axios.post('/hourschart', {
        location, startDate, endDate
      });
      setChartData(response.data);
    };
    fetchData();
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div style={{ position: 'relative',
      left: '300px',
      border: '3px',width: '500px', backgroundColor: '#fff', borderRadius: '6px', padding: '0px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }}>
      <h2>Location Statistics</h2>
    <Pie
      data={{
        labels: chartData?.map((data) => data.label),
        datasets: [{
          label: 'Enrollments',
          data: chartData?.map((data) => data.value),
          backgroundColor: ['rgba(2, 19, 1, 1)', 'rgba(25, 9, 132, 1)', 'rgba(255, 0, 0, 1)'],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1,
        }]
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: `Location: ${location}`,
            position: 'top',
            fontColor: '#333',
            fontSize: 20,
            fontFamily: 'Arial',
            padding: 20,
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: '#666',
              fontSize: 14,
              fontFamily: 'Arial',
            }
          },
        },
        onClick: (event, element) => {
          if (element.length) {
            const location = chartData[element[0].index]?.label;
            setLocation(location);
          }
        },
      }}
    />
    
    <div style={{ position: 'absolute', top: 20, right: 0 }}>
      <select value={location} onChange={handleLocationChange} style={{ fontSize: 16, fontFamily: 'Arial', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#f2f2f2' }}>
        <option value="San Jose">San Jose</option>
        <option value="Fremont">Fremont</option>
        <option value="Santa Clara">Santa Clara</option>
      </select>
      <select value={timeRange} onChange={handleTimeRangeChange}>
            <option label="1 day" value="1">1 day</option>
            <option label="1 week" value="7">1 week</option>
            <option label="90 days" value="90">90 days</option>
          </select>
    </div>
  </div>    
  );
}

export default AnalyticsDashboard;
