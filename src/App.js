import React from 'react';

import Footer from './components/Footer.js'
import AboutUS from './components/AboutUs.js'
import main_img from './components/gym_buddy_main_img.png'; // Import the image
import logo from './components/gym_buddy_logo.png'; // Import the image
import './App.css';
import Stats from './components/Stats.js'
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials.js'
import LandingPage from './components/LandingPage.js';
import HowItWorks from './components/HowItWorks.js';




function App() {
  return (
    <div className="App">
     
  
       
         <NavBar/>
          <LandingPage/>
          <Stats></Stats>
          <HowItWorks/>
        
        
      <header className="App-header">
       
      </header>
      <Testimonials/>
      <AboutUS/>
      <Footer />
     </div>
     
  
  );
} 

export default App;
