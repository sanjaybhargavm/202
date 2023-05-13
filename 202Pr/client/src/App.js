//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
// import LoginComponent from './Login/LoginComponent';
// import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from './pages';
import React from 'react';

import Service from './pages/Service/service';
import Classes from './pages/Classes/classes';
import Pricing from './pages/Pricing/pricing';
import Contact from './pages/Contacts/contact';
import MemberHomePage from './pages/MemberHomePage/member';
import HCMember from './pages/HCMemberHomePage/hcmember';
import LoginComponent from './pages/Login/login';
import SignupComponent from './pages/Signup/SignupForm';
import { GymEnrollment } from './pages/GymEnrollment';
import { LogHours } from './pages/LogHours';
import ActivitiesChart from './pages/ActivitiesChart';
import ClassSchedule from './pages/ClassSchedule';
import { useState } from 'react';
import EnrollComponent from './pages/HCMemberHomePage/enrollmember';
import ForgotPassword from './pages/Login/forgotpassword';
import Membership from './pages/Pricing/Membership';
import Workout from './pages/Service/Workouts';
function App() {
  const [state, setSate] = useState(true)

  function callBackHandler() {
    console.log("handler called")
    setSate(!state);
  }
  return (

    <Router>
      {<Navbar loginstate={state} />}
      {/* {(localStorage.getItem("auth")) && <Sidebar />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gymenrollment' element={<GymEnrollment />} />
        <Route path='/loghours' element={<LogHours />} />
        <Route path='/activitieschart' element={<ActivitiesChart />} />
        <Route path='/classSchedule' element={<ClassSchedule />} />
        <Route path='/service' element={<Workout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/pricing' element={<Membership />} />
        <Route path='/member' element={<MemberHomePage callBackHandler={callBackHandler} />} />
        <Route path='/hcmember' element={<HCMember callBackHandler={callBackHandler} />} />
        <Route path='/login' element={<LoginComponent callBackHandler={callBackHandler} />} />
        <Route path='/SignupForm' element={<SignupComponent />} />
        <Route path='/enrollmember' element={<EnrollComponent />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </Router>

  );
}

export default App;
