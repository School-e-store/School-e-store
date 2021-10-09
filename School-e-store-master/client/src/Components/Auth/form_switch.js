import React from "react";
import Login from "./login";
import Signup from "./SignUp";
import { useState } from "react";
import "./style_auth.css";
import { CSSTransition } from "react-transition-group";
function Form_switch()
{
    const [isSignup, setSignUp] = useState(false);  
 return(
     <div>
    <CSSTransition
    in={isSignup}
    timeout={1000}
    classNames="alert"
    unmountOnExit
    >
    <Signup formtype={setSignUp}/>
    </CSSTransition>
    <CSSTransition
    in={!isSignup}
    timeout={1000}
    classNames="alert"
    unmountOnExit
    >
    <Login formtype={setSignUp}/>
    </CSSTransition>
    </div>
 );
}
export default Form_switch;