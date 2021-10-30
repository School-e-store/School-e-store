import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/about";
import Form_switch from "./Components/Auth/form_switch";
import About_school from "./Components/School_info/About_school_flow";
import Admsn_flow from "./Components/School_info/admission_flow";
import Schestore_flow from "./Components/School_info/schoolestore_flow";
import Job_flow from "./Components/School_info/jobs_flow";
import People_flow from "./Components/School_info/people_flow";
function App() {
  return (
    <div>
    {/* <Form_switch/> */}
    {/* <Home/> */}
    {/* <About_school/> */}
    {/* <About/> */}
    <Admsn_flow/>
    {/* <Schestore_flow/> */}
    {/* <Job_flow/> */}
    {/* <People_flow/> */}
    </div>
  );
}
export default App;