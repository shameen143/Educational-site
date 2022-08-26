import React from "react";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CourseHome from "./Components/allcourses/CourseHome";
import Team from "./Components/team/Team";
import Price from "./Components/Pricing/Price";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/footer/Footer";
import "./App.css";



function App(){
  return(
    <div>
      
    <Header/>
    
    <Routes>
    <Route path="/Home" element={ <Home/> } />
    <Route path="/about" element={ <About/> } />
    <Route path="/course" element={ <CourseHome/> } />
    <Route path="/team" element={ <Team/> } />
    <Route path="/pricing" element={ <Price/> } />
    <Route path="/journal" element={ <Blog/> } />
    <Route path="/contact" element={ <Contact/> } />
    </Routes>
    <Footer/>
    
       
      </div>
   
  );

};

export default App;

