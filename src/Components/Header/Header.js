import React from "react";
import Head from "./Head";
import './header.css';
import { Link } from "react-router-dom";


const Header=()=>{
   
    return(
        <div>
<Head/>
<header>
    <nav className="flexSB">
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/course">All courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/journal">journal</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
        <div className="start">
            <div className="button">GET CERTIFIED</div>
        </div>
    
        
        
        
    </nav>
    </header>
        </div>
    );
};
export default Header;