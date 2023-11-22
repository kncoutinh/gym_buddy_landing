import React, { useRef, useState, useEffect } from 'react';
import './NavBar.css';
import LandingPage from './LandingPage.js';
import {Link} from 'react-scroll';
import logo from './logo2.png';
import HowItWorks from './HowItWorks.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';

function NavBar() {
  const landingPageRef = useRef(React.createRef());
  const howitworksref = useRef();
  const aboutusref = useRef();
  const footerref = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const updateWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add event listener to update isMobile when the window size changes
    window.addEventListener('resize', updateWindowSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  const scrollHandler = (elmRef) => {
    if (elmRef.current) {
      window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
    }
  };

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="icon"
          onClick={() => scrollHandler(landingPageRef)}
        />
      </div>

      <div className={`button-container ${showMenu ? 'show-menu' : ''}`}>
        {isMobile ? (
          <>
            <div className="menu-icon" onClick={toggleMenu}>
              ☰
            </div>
            {showMenu && (
  <div className="menu-items">
    <div className="nav-button">
    <Link to="howitworks" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>
      Features
    </Link>
    </div>
    <div className="nav-button">
    <Link to="aboutus" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>
      About Us
      </Link>
    </div>
    <div className="nav-button">
    <Link to="footer" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>
      Contact
      </Link>
    </div>
    <div className="down-button" onClick={openDownloadLink}>
      Download ✨
    </div>
  </div>
)}</>)
         : (
          <>
            <div className="nav-button">
    <Link to="howitworks" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>
      Features
    </Link>
    </div>
    <div className="nav-button">
    <Link to="aboutus" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>
      About Us
      </Link>
    </div>
    <div className="nav-button">
    <Link to="footer" spy={true} smooth={true} offset={50} duration={500} onClick={toggleMenu}>
      Contact
      </Link>
    </div>
    <div className="down-button" onClick={openDownloadLink}>
      Download ✨
    </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;