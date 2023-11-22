import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import './HowItWorks.css';
import Phone from './img/Phone.svg'; // Import the image
import Vector11 from './img/Vector11.svg';
import Vector10 from './img/Vector10.svg';
import BlueCircle1 from './img/BlueCircle1.svg';
import BlueCircle2 from './img/BlueCircle2.svg';
import BlueCircle3 from './img/BlueCircle3.svg';

const HowItWorks = forwardRef((props, ref) => { 
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
    <div className="HowItWorks" id = 'howitworks'>
         
        <div className="title-container">
            <div className="title">How It Works</div>
            <div className="caption">Find people who motivate you 🏋️</div>
        </div>  
        
        <div className="body-container">
            <div className="first-bubble-container">
                <img src={Phone} alt="Image 1" className="phone-image-1" />
                <div className="bubble">    

                    <img src={BlueCircle1} alt="Image 1" className="BlueCircle1" />

                    <div className='bubble-text'>
                        <div className="bubble-text-title">
                            <div>Set your gym style</div>
                        </div>
                        <div className="bubble-text-caption">
                            <div>matches are made based on your schedule, goals, and interests</div>
                        </div>
                    </div>          
                </div>

                <div className="arrow1-image">
                    <img src={Vector11} alt="Additional Image" />
                </div>
            </div>

            <div className="bubble-container">
                <div className="arrow2-image">
                    <img src={Vector10} alt="Additional Image" />
                </div>

                <div className="bubble">    
                    <img src={BlueCircle2} alt="Image 1" className="BlueCircle2" />

                    <div className='bubble-text'>
                        <div className="bubble-text-title">
                            <div>Get matched</div>
                        </div>
                        <div className="bubble-text-caption">
                            <div>through friend requests or our Quick Pair auto-matching system</div>
                        </div>
                    </div>          
                </div>
                <img src={Phone} alt="Image 1" className="phone-image-2" />
            </div>

            <div className="first-bubble-container">
                <img src={Phone} alt="Image 1" className="phone-image-3" />
                <div className="bubble">    
                    <img src={BlueCircle3} alt="Image 1" className="BlueCircle3" />

                    <div className='bubble-text'>
                        <div className="bubble-text-title">
                            <div>Gym together!</div>
                        </div>
                        <div className="bubble-text-caption">
                            <div>chat, send invites, and meet up for a pumped session</div>
                        </div>
                    </div>          
                </div>
            </div>
        </div>
    </div>
    )
});

export default HowItWorks;
