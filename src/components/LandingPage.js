import React from 'react';
import phoneandhand from './img/fullhand.svg';
import mobile from './img/mobileone.svg';
import arrow from './img/arrow.png';
import { forwardRef, useImperativeHandle } from 'react';
import './LandingPage.css';



const LandingPage = forwardRef((props, ref) => { 
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
  return ( 
  <div className="landingpage-container">
  {isMobile ? (
    <>
      <div className="header-text">find other students</div>
      <div className="header2-text">to gym with</div>
      <div className="hand-container">
            <img className="hand" src={mobile} alt="icon" />
          </div>
    </>
  ) : (
    <>
      <div className="blue-box"></div>
      <img className="arrow-element" src={arrow} alt="icon" />
      <div className="header-text">gym together!</div>
          <div className="hand-container">
            <img className="hand" src={phoneandhand} alt="icon" />
          </div>
    </>
  )}
</div>
);
});

export default LandingPage;




