import React from "react";
import Back from "../Back/Back";
import BlogCard from "./BlogCard";




const Blog=()=>{
    return(
        <div>
            <Back title='Blog Post'></Back>
            <section className="blog padding">
                <div className="container grid2">
                    <BlogCard/>

                </div>
            </section>

        </div>
    );
};
export default Blog;