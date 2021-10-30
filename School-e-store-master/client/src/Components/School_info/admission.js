import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Admission()
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
    <Col lg={2} md={2} sm={4} className="land_nav">About school</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav1">Admission</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav">Schoolestore</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav">Jobs</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav">People</Col>   
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
  <div className="land_abt_school1">
    <div className="box_title" style={{fontSize:"25px",fontWeight:"500"}}>Admission Status</div>
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
     <Col lg={3} md={3} sm={3} xs={3} className="m-0 p-0">Action</Col>
  </Row>
  <div style={{border:"solid black 1px",width:"100%",height:"0%",boxShadow:"0px 0px 6px #000000",marginTop:"20px"}}></div>
  <div style={{color:"black",textAlign:"center",fontSize:"20px"}}><FontAwesomeIcon icon={faChevronDown} /></div>
  </div>
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500"}}>Fee Structure</div>
    </div>
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500"}}>Details</div>
    </div>
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500"}}>Apply Online</div>
    </div>
  </div>
  </div>
  </div>);
}
export default Admission;