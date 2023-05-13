import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./classes.css";
// import dateFormat from 'dateformat';

/*function Clsses() {
  const [location, setLocation] = useState('');
  const [exercise, setExercise] = useState(null);

  const data = [
    {
      location: 'Santa Clara',
      services: 'Threadmill',
      classDay: "Monday, Wednesday and Friday",
      startTime: new Date('T10:00:00'),
      endTime: new Date('T10:00:00')
    },
    {
      location: 'Santa Clara',
      services: 'Weightlifting',
      classDay: "Monday, Wednesday and Friday",
      startTime: new Date('T10:00:00'),
      endTime: new Date('T10:00:00')
    },
    {
		location: 'Sant Jose',
		services: 'Weight Lifting',
		classDay: 'Tuesday, Thursday and Saturday',
		startTime: new Date('T10:00:00'),
		endTime: new Date('T10:00:00')
    }
    // add more exercise objects as needed
  ];

  const handleSelectChange = e => {
    setLocation(e.target.value);
    setExercise(data.find(item => item.location === e.target.value) || null);
  };

  return (
    <div className="grid-block-container">
      <select value={location} onChange={handleSelectChange}>
        <option value="">Select a Location</option>
        {data.map(item => (
          <option key={item.location} value={item.location}>{item.location}</option>
        ))}
      </select>

      {exercise &&
        <div className="grid-block">
          <h2><b>{exercise.services}</b></h2>
          <p><b>Class Days:</b> Every Weekday </p><br></br>
          <p><b>In/Out Time:</b> 06:00 AM - 10:00 PM</p><br></br>
        </div>
      }
    </div>
  );
}

export default Clsses;*/


function Clsses() {
  const [location, setLocation] = useState('');
  const [exercise, setExercise] = useState(null);

  const data = {
    'Santa Clara': [
      {
        services: 'Threadmill',
        classDay: "Monday to Saturday",
        startTime: new Date('T10:00:00'),
        endTime: new Date('T10:00:00')
      },
      {
        services: 'Weightlifting',
        classDay: "Monday to Saturday",
        startTime: new Date('T10:00:00'),
        endTime: new Date('T10:00:00')
      },
      // add more exercise objects for Santa Clara as needed
    ],
    'Fremont': [
      {
        services: 'Threadmill',
        classDay: "Monday to Saturday",
        startTime: new Date('T10:00:00'),
        endTime: new Date('T10:00:00')
      },
      {
        services: 'Weightlifting',
        classDay: "Monday to Saturday",
        startTime: new Date('T10:00:00'),
        endTime: new Date('T10:00:00')
      },
      // add more exercise objects for Santa Clara as needed
    ],
    'San Jose': [
      {
        services: 'Weight Lifting',
        classDay: 'Monday to Saturday',
        startTime: new Date('T10:00:00'),
        endTime: new Date('T10:00:00')
      },
      // add more exercise objects for Sant Jose as needed
    ],
    // add more locations as needed
  };

  const handleSelectChange = e => {
    setLocation(e.target.value);
    setExercise(null);
    if (e.target.value) {
      setExercise(data[e.target.value][0]);
    }
  };

  return (
    <div  className="grid-block-container">
      <select value={location} onChange={handleSelectChange}>
        <option value="">Select a Location</option>
        {Object.keys(data).map(locationName => (
          <option key={locationName} value={locationName}>{locationName}</option>
        ))}
      </select>

      {exercise &&
        <div  style={{ position: 'absolute',
          top: '250px',
          left: '30px',
          width: '800px',
          height: '200px',
          color:'white',
          backgroundImage: 'url("https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800")',
        border: '1px'}}className="grid-block">
          <h2><b>{exercise.services}</b></h2>
          <p><b>Class Days:</b> Every Day </p><br></br>
          <p><b>In/Out Time:</b> 06:00 AM - 10:00 PM</p><br></br>
        </div>
      }
    </div>
  );
}

export default Clsses;




