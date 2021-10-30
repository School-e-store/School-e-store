import MyNavbar from "./Navbar";
import React from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Admission from "./admission";
function Admsn_flow()
{
  return (
      <div>
          <MyNavbar/>
          <Pagination/>
          <div style={{backgroundColor:"#E1EAF4"}}>
          <Admission/>
          </div>
          <Footer/>
      </div>
  );
}
export default Admsn_flow;