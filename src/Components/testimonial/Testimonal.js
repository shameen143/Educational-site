import React from "react";
import Heading from "../Heading/Heading";
import { testimonal } from "../../dummydata";
import './style.css';


function Testimonal() {
    return (
        <div>
            <section className="testimonal">
                <div className="container">
                <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />
                    <div className="content grid2">
                        {testimonal.map((val) => (
                            <div className="item shadow">
                                <div className="box flex">
                                    <div className="img">
                                        <img src={val.cover} alt="">

                                        </img>
                                    </div>
                                    <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
                    
                    
                            
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}
export default Testimonal;