import React from "react";
import PriceCard from '../Pricing/PriceCard';
import Heading from "../Heading/Heading";



const Hprice=()=>{
    return (
        <div>
<section className="hprice padding">
    <div className="container">
        <Heading subtitle='Our pricing' title='pricing and packages'/>
        <div className="price container grid">
            <PriceCard/>
        </div>
        </div>

        </section>
        </div>
    )
}
export default Hprice;

