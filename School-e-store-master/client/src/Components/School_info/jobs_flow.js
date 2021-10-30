import MyNavbar from "./Navbar";
import React from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Jobs from "./jobs";
function Job_flow()
{
  return (
      <div>
          <MyNavbar/>
          <Pagination/>
          <div style={{backgroundColor:"#E1EAF4"}}>
          <Jobs/>
          </div>
          <Footer/>
      </div>
  );
}
export default Job_flow;