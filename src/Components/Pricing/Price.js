import React from "react";
import Back from "../Back/Back";
import PriceCard from "./PriceCard";
import Faq from "./Faq";



const Price=()=>{
    return(
  <div>
<Back title='Choose the Right Plan'></Back>
<section className="price padding">
    <div className="container grid5">
    <PriceCard/>
    <Faq/>
    </div>
</section>
  </div>
    );
};
export default Price;