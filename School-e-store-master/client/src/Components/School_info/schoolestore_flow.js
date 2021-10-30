import MyNavbar from "./Navbar";
import React from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Schoolestore from "./schoolestore";
function Schestore_flow()
{
  return (
      <div>
          <MyNavbar/>
          <Pagination/>
          <div style={{backgroundColor:"#E1EAF4"}}>
          <Schoolestore/>
          </div>
          <Footer/>
      </div>
  );
}
export default Schestore_flow;