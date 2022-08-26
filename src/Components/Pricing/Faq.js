import React, { useState } from "react";
import Title from "../title/Title";
import {faq} from '../../dummydata';
import './Price.css';


const Faq=()=>{

    const[click,setClick]= useState(false)
    const toggle=(index)=>{
        if(click===index){
            return setClick(null)
        }
        setClick(index)
    }
    return(
        <div>
<Title subtitle='FAQS' title='Frequently Asked Question'></Title>
<section className="faq">
    <div className="container">
        {faq.map((val,index)=>(
            <div className="box">
                <button className="accordion" onClick={()=>toggle(index)} key={index}>
                    
                    <h2>{val.title}</h2>
                    </button>
                    {click === index ? (
                <div className="text">
                    <p>{val.desc}</p>
                </div>
                    ) : null}
                </div>

        )
        )}
    </div>
</section>
        </div>
    );
};
export default Faq;