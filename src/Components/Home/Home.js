import React from "react";
import AboutCard from "../About/AboutCard";
import Hero from "../Hero/Hero";
import HAbout from "../Home/HAbout";
import Testimonal from "../testimonial/Testimonal";
import Hprice from '../Home/Hprice';
import Hblog from "./Hblog";




const Home=()=>{
    return(
        <div>
<Hero/>
<AboutCard/>
<HAbout/>
<Testimonal/>
<Hblog/>
<Hprice/>
<div className='margin'></div>
        </div>
    );
};
export default Home;