import React from "react";
import {blog }from '../../dummydata';
import './Blog.css';




const BlogCard=()=>{
    return(
        <div>
{blog.map((val)=>{
    return(
    <div className="item shadow">
        <div className="img">
            <img src={val.cover} alt=''></img>
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
    );
};
export default BlogCard;