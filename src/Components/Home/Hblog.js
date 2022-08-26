import React from "react";
import {blog }from '../../dummydata';
import Heading from "../Heading/Heading";
import '../Blog/Blog.css';


const Hblog=()=>{
    return(
        <div>
<section className="blog">
    <div className="container">
        <Heading subtitle='Our Blog' title='recent from Blog'/>
        <div className="container">
            {blog.slice(0,3).map((val)=>{
                return(
                    <div className="items shadow">
                        <div className="img">
                            <img src={val.cover} alt=''>

                            </img>
                        </div>
                        <div className="text">
                <div className="admin flexSB">
                    <span>
                        <i className="fa fa-user"></i>
                        <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                        <i className="fa fa-calender-alt"></i>
                        <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                        <i className="fa fa-comments"></i>
                        <label htmlFor="">{val.com}</label>
                    </span>
                    </div>
                    <h1>{val.title}</h1>
                    <h1>{val.desc}</h1>
                </div>
        </div>
)
    })}
                    </div>

    </div>
</section>
        </div>
    );
};
export default Hblog;