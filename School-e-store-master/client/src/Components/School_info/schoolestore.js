import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import { Link } from "react-router-dom";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import Principal from "../Images/principal.jpg";
import Tour from "../Images/tour.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Schoolestore()
{
  return (<div>
  <div style={{display:"flex", justifyContent:"space-around",width:"100%"}}>
    <div className="land_card">
    <div><img src={Back_img} className="land_back_img"/></div>
    <div><img src={IITD} className="land_logo"/></div>
    <div className="land_title">Delhi International School</div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div className="land_content">Sector 18, Dwarka</div>
    <div className="land_contact_but">
    <Button variant="outline-dark" size="lg" className="custom_but1" style={{marginRight:"30px"}}>Contact Us
    {/* <Link to="/login">Log-In</Link> */}
    </Button>
    </div> 
    </div>
    <div style={{border:"solid black 2px",width:"100%",height:"0%"}}></div>
    <Row className="m-0 p-0">
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School">About school </Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/admission">Admission</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav1"><Link style={{textDecoration:"none",color:"black"}} to="/School/schoolestore">Schoolestore</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/jobs">Jobs</Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/people">People</Link></Col> 
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500"}}>Application form</div>
    <br/>
    <Row className="school_info_table2_title p-0">
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">Class</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">Session</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">Last Date</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">Application Fees</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">Action</Col> 
  </Row>
  <Row className="school_info_table2_content p-0">
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">Nursery</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">2020-2023</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">--</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">₹ 25</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">Starting soon</Col>
  </Row>
  <Row className="school_info_table2_content p-0">
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">UKG</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">2020-2023</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">--</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">₹ 25</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">Starting soon</Col>
  </Row>
  <Row className="school_info_table2_content p-0">
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">Class 1</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">2020-2023</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">--</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">₹ 25</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">Starting soon</Col>
  </Row>
  <Row className="school_info_table2_content p-0">
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">Class 2</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">2020-2023</Col> 
     <Col lg={2} md={2} sm={2} xs={2} className="m-0 p-0">--</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">₹ 25</Col> 
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">
     <Button className="admission_button1" variant="outline-dark" size="sm">Apply now
     {/* <Link to="/login">Log-In</Link> */}
     </Button>
     <Button className="admission_button2" variant="outline-dark" size="sm">Add to cart
     {/* <Link to="/login">Log-In</Link> */}
     </Button>
     </Col>
  </Row>
  <div style={{border:"solid black 1px",width:"100%",height:"0%",boxShadow:"0px 0px 6px #000000",marginTop:"20px"}}></div>
  <div style={{color:"black",textAlign:"center",fontSize:"20px"}}><FontAwesomeIcon icon={faChevronDown} /></div>
    </div>
    <div className="land_abt_school1">
    <div className="box_title" style={{fontSize:"25px",fontWeight:"500"}}>Stationery & Bookset</div>
  <Row className="school_info_table1_title">
     <Col lg={3} md={3} sm={3} xs={3}>Class</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>Book store</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>Book set</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>Stationary set</Col> 
  </Row>
  <Row className="school_info_table1_content">
     <Col lg={3} md={3} sm={3} xs={3}>Nursery</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>Company</Col>
     <Col lg={3} md={3} sm={3} xs={3}>✔️</Col>
     <Col lg={3} md={3} sm={3} xs={3}>✔️</Col>  
  </Row>
  <Row className="school_info_table1_content">
     <Col lg={3} md={3} sm={3} xs={3}>UKG</Col>
     <Col lg={3} md={3} sm={3} xs={3}>Company</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>✔️</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>❌</Col> 
  </Row>
  <Row className="school_info_table1_content">
     <Col lg={3} md={3} sm={3} xs={3}>Class 1</Col>
     <Col lg={3} md={3} sm={3} xs={3}>Company</Col>
     <Col lg={3} md={3} sm={3} xs={3}>❌</Col>
     <Col lg={3} md={3} sm={3} xs={3}>✔️</Col> 
  </Row>
  <Row className="school_info_table1_content">
     <Col lg={3} md={3} sm={3} xs={3}>Class 2</Col> 
     <Col lg={3} md={3} sm={3} xs={3}>Company</Col>
     <Col lg={3} md={3} sm={3} xs={3}>✔️</Col>
     <Col lg={3} md={3} sm={3} xs={3}>✔️</Col> 
  </Row>
  </div>
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500"}}>Competetion and events</div>
    </div>
  </div>
  </div>
  </div>);
}
export default Schoolestore;