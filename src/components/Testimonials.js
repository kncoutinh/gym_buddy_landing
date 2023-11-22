import React from 'react';
import './Testimonials.css';
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from "react"
import images from "./images"

function Testimonials() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="testApp">
      <header className="testApp-header">
        <h2 className="aboutTest">What Our Users Say</h2>
        <h1 className="titleTest">Find your community</h1>
      </header>
      <div className="mainIcons">
        {/*<img className="carousel" src={Carousel} alt="Carousel" />*/}
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
          <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">
            {images.map(image => {
              return(
                <motion.div className='item' key={image}>
                  <img src={image} alt='' />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
