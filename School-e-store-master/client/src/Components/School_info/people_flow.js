import MyNavbar from "./Navbar";
import React from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";
import People from "./people";
function People_flow()
{
  return (
      <div>
          <MyNavbar/>
          <Pagination/>
          <div style={{backgroundColor:"#E1EAF4"}}>
          <People/>
          </div>
          <Footer/>
      </div>
  );
}
export default People_flow;