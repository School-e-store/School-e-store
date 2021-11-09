import React from "react";
import MyNavbar from "./Navbar";
import Intro from "./Intro";
import "./style_about.css";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import FAQs from "./FAQs";
import About_land from "../Images/About_land.png";
import Footer from "./Footer";
import { useState,useEffect } from "react";
function About()
{
  const[winWidth,setWidth]=useState(window.innerWidth);
 useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
}
    window.addEventListener('resize', handleResize)
  })
  return (<div>
    <MyNavbar/>
    <img src={About_land} className="img_land"/>
    <Intro/>
    <Feature1/>
    <Feature2/>
    {(winWidth>850)&&
    <FAQs/>}
    <Footer/>
  </div>)
}
export default About;