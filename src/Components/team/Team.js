import React from "react";
import Back from "../Back/Back";
import TeamCard from "./TeamCard";
import './Team.css';

import Awrapper from "../About/Awrapper";


const Team=()=>{
    return(
        <div>
            <Back title='Team'></Back>
            <section className="team padding">
                <div className="container grid">
                <TeamCard/>  
                </div>
                
            </section>
            <Awrapper />
        </div>
    );
};
 export default Team;