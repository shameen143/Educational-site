
import React from "react";
import './Hero.css';
import Title from '../title/Title';

const Hero=()=>{
    return(
        <div>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'></Title>
                        <p>In publishing and graphic design, 
                            Lorem ipsum is a placeholder text commonly used to demonstrate 
                            the visual form of a document or a typeface without relying on meaningful content.</p>
                            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </div>
    );
};
export default Hero;