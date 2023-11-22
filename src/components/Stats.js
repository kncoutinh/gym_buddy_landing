import React from 'react';
import school_icons from './schools_icons.png'
import berkeley from './img/berkicon.svg'
import davis from './img/daviscon.svg'
import stanford from './img/stanicon.svg'
import './Stats.css'


function Stats() {
  return (
  
    <div className='school_section'>
       <h1 className='num'>1300+</h1>
      <h1 className='matches_made'>matches made at</h1>
      <div className = 'school-style'>
      <img  className = "davis" src={davis}></img>
     <img  className = "berkeley" src={berkeley}></img> 
     <img  className = "stanford" src={stanford}></img>
     </div>
     </div>



  );
}

export default Stats;
