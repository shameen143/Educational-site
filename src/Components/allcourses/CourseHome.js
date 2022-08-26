import React from "react";
import Back from "../Back/Back";
import CoursesCard from "./CoursesCard";
import "./course.css";
import OnlineCourses from "./OnlineCourses";


const CourseHome=()=>{
    return(
        <div>
           
<Back title='Explore Courses'></Back>

<CoursesCard/>
<OnlineCourses/>

   

        </div>

    );

};
export default CourseHome;