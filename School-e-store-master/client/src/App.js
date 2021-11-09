import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/about";
import Form_switch from "./Components/Auth/form_switch";
import About_school from "./Components/School_info/About_school_flow";
import Admsn_flow from "./Components/School_info/admission_flow";
import Schestore_flow from "./Components/School_info/schoolestore_flow";
import Job_flow from "./Components/School_info/jobs_flow";
import People_flow from "./Components/School_info/people_flow";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booksellerpage from "./Components/Bookseller/Booksellerpage";
import Bschoolpage from "./Components/Bschool/Bschoolpage";
import Comparisonpage from "./Components/Comparison/Comparisonpage";
import Schoolpage from "./Components/Schoolfolder/Schoolpage";
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/signup" >
      <Form_switch val={true}/>
    </Route>
    <Route path="/login" >
      <Form_switch val={false}/>
    </Route>
    <Route path="/" exact component={About}/>
    <Route path="/School" exact component={About_school}/>
    <Route path="/School/admission" exact component={Admsn_flow}/>
    <Route path="/School/schoolestore" exact component={Schestore_flow}/>
    <Route path="/School/people" exact component={People_flow}/>
    <Route path="/School/jobs" exact component={Job_flow}/>
    <Route path="/bookseller" exact component={Booksellerpage}/>
    <Route path="/bestschool" exact component={Bschoolpage}/>
    <Route path="/Comparison" exact component={Comparisonpage}/>
    </Switch>
    </Router>
    /* <Home/> */
  );
}
export default App;