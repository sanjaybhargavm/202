import React from 'react';
import './style.css'
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Login from './Login/login';
//import LoginComponent from './Login/login';
const Home = () => {
return (
	<div style={{backgroundImage: 'url("https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800")'}} class="title">
    
    {/* <img src='ban.jpeg' alt="banner1"/> */}
    
    <div style={{color:'white'}}class="himg">
	  <h1>Welcome to Fit Fusion</h1>
	
<div style={{ }} class="button-container">
<button class="button" onClick={handleLoginClick}>Login</button>
  <button class="button" onClick={handleSignupClick}>SignUp</button>
</div></div></div>
);
function handleLoginClick() {
  // Redirect to the login page
  window.location.href = "./login";
}
function handleSignupClick() {
  window.location.href = "./SignupForm"
}
};

export default Home;
