import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Head=()=>{
    return(
        <div>
<section className="head">
    <div className="container flexSB">
        <div className="logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION AND LEARNING</span>
        </div>
        <div className="social">
        <FontAwesomeIcon icon={faFacebook}  className="icon"/>
        <FontAwesomeIcon icon={faInstagram}  className="icon"/>
        <FontAwesomeIcon icon={faTwitter}   className="icon"/>
        <FontAwesomeIcon icon={faYoutube}  className="icon"/>
        </div>

    </div>
</section>
        </div>
    );
};
export default Head;


