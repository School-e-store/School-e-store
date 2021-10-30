import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import Principal from "../Images/principal.jpg";
import Tour from "../Images/tour.jpeg";
function Jobs()
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
    <Col lg={2} md={2} sm={4} className="land_nav">Admission</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav">Schoolestore</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav1">Jobs</Col>   
    <Col lg={2} md={2} sm={4} className="land_nav">People</Col>   
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500"}}>Application form</div>
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
export default Jobs;