import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import './Footer.css';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import footer_download from './footer_download_button.png';




const Footer = forwardRef((props, ref) => { 
  const isMobile = window.innerWidth <= 768;
  //use this function for each page
  useImperativeHandle(ref, () => ({
    // Define functions or values to expose
    scrollToTop: () => {
      // Implement the logic to scroll to the top of the LandingPage
      // You can use the same logic you have in your scrollHandler
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  }));
  const openDownloadLink = () => {
    // Open the link in a new tab
    const downloadWindow = window.open(
      'https://apps.apple.com/us/app/gymbuddy-connect-workout/id6446038725',
      '_blank'
    );

    if (downloadWindow) {
      downloadWindow.focus();
    }
  };
  const openInstagram = () => {
    // Open the link in a new tab
    const downloadWindow = window.open(
      'https://www.instagram.com/gymbuddy.ucd/?hl=en',
      '_blank'
    );

    if (downloadWindow) {
      downloadWindow.focus();
    }
  };
  const openLinkedIn = () => {
    // Open the link in a new tab
    const downloadWindow = window.open(
      'https://www.linkedin.com/company/gymbuddyapp/'
    );

    if (downloadWindow) {
      downloadWindow.focus();
    }
  };
  return (
    
    <footer className='footer-style' id = 'footer'>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500&display=swap');
     </style>
     <div className='footer-text'>
     <h3 className='sec-title'>The Grind Doesn't Stop</h3>
      <h1 className='main-title'>Become a GymBuddy Today!</h1>
      <h4 className='email-title'>hellogymbuddy@gmail.com</h4>
      </div>
      <div className='icons-style'>
      <img src={instagram} onClick={openInstagram}/>
      <img src={linkedin} onClick={openLinkedIn}/>
      </div>
      <img className = 'footer-download'src={footer_download} onClick={openDownloadLink}/> 
    

 

      <p>&copy; 2023 Your Company</p>
    </footer>
  );
});

export default Footer;