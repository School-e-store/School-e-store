import MyNavbar from "./Navbar";
import React from "react";
import Pagination from "./Pagination";
import Land_pg from "./About_school";
import Footer from "./Footer";
function About_school()
{
  return (
      <div>
          <MyNavbar/>
          <Pagination/>
          <div style={{backgroundColor:"#E1EAF4"}}>
          <Land_pg/>
          </div>
          <Footer/>
      </div>
  );
}
export default About_school;