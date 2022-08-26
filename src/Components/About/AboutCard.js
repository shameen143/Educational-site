import React from "react";
import Heading from '../Heading/Heading';
import { homeAbout } from '../../dummydata';
import Awrapper from "./Awrapper";
import "./about.css";




const AboutCard =()=>{
    return(
        <div>   
            <section className="abouthome">
                <div className="container flexSB">
                    <div className='left row'>
                      <img src='./images/about.webp'></img>
                    
                    </div>
                    <div className='right row'>
            <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                    </div>
                
    
                )
              })}
            </div>
          </div>
          </div>

                    
                    
        
        
            </section>
            <Awrapper />
        </div>
    );
};
export default AboutCard;