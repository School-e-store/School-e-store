import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
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
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School">About school </Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav1"><Link style={{textDecoration:"none",color:"black"}} to="/School/admission">Admission</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/schoolestore">Schoolestore</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/jobs">Jobs</Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/people">People</Link></Col> 
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
  <div className="land_abt_school1">
    <div className="box_title" style={{fontSize:"30px",fontWeight:"600",color:"#8C30F5"}}>Admission Status</div>
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
  <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"600",color:"#8C30F5"}}>Fee Structure</div>
    <div style={{fontSize:"25px",fontWeight:"500",display:"inline"}}>Average Fees K -12 : </div>
    <div style={{fontSize:"25px",fontWeight:"400",display:"inline"}}>12,250.00</div>
    <br/>
    <div style={{fontSize:"25px",fontWeight:"500",display:"inline"}}>Admission Fees : </div>
    <div style={{fontSize:"25px",fontWeight:"400",display:"inline"}}>50,000.00</div>
    <br/>
    <div style={{fontSize:"25px",fontWeight:"500",display:"inline"}}>Eligibility Age criteria (in years)</div>
    <br/>
    <div style={{fontSize:"25px",fontWeight:"400",display:"inline"}}>Nursery: 3+ as on 31 st March</div>
    <br/>
    <div style={{fontSize:"25px",fontWeight:"400",display:"inline"}}>Class 1: 4+ as on 31 st March</div>
    <br/>
    <div style={{fontSize:"25px",fontWeight:"500",display:"inline"}}>Registration Fees: </div>
    <div style={{fontSize:"25px",fontWeight:"400",display:"inline"}}>1500.00</div>
    <div className="land_contact_but" style={{display:"flex",flexDirection:"row-reverse"}}>
    <Button variant="outline-dark" size="lg" className="custom_but1" style={{marginRight:"30px"}}>Enquire Now
    {/* <Link to="/login">Log-In</Link> */}
    </Button>
    </div> 
    </div>
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500",color:"#8C30F5"}}>Details</div>
    <div>
      <Row style={{display:"flex !important",justifyContent:"space-around"}}>
        <Col style={{marginTop:"30px"}} lg={2} md={3} sm={3} md={6} className="box_admsn"><div style={{fontSize:"22px",fontWeight:"500"}}>Class</div><div>AC Classes</div><div>Smart Classes</div><div>Wifi</div><div>***</div><div>***</div><div>***</div></Col>
        <Col style={{marginTop:"30px"}} lg={2} md={3} sm={3} md={6} className="box_admsn"><div style={{fontSize:"22px",fontWeight:"500"}}>Advanced Facilities</div><div>Alumni Association</div><div>Day Care</div><div>Meals</div><div>Transportation</div><div>Special Educators</div></Col>
        <Col style={{marginTop:"30px"}} lg={2} md={3} sm={3} md={6} className="box_admsn"><div style={{fontSize:"22px",fontWeight:"500"}}>Sports and Fitness</div><div>Indoor Sports</div><div>Outdoor Sports</div><div>Karate</div><div>Taekwondo</div><div>Yoga</div><div>Swimming</div></Col>
        <Col style={{marginTop:"30px"}} lg={2} md={3} sm={3} md={6} className="box_admsn"><div style={{fontSize:"22px",fontWeight:"500"}}>Infrastructure</div><div>Canteen</div><div>Liberary</div><div>Reading Room</div><div>Playground</div><div>Auditorium</div><div>Media Room</div></Col>
        <Col style={{marginTop:"30px"}} lg={2} md={3} sm={3} md={6} className="box_admsn"><div style={{fontSize:"22px",fontWeight:"500"}}>Labs</div><div>Computer Lab</div><div>Mobile science Lab</div><div>Chemistry Lab</div><div>Biology Lab</div><div>Maths Lab</div><div>Physics Lab</div></Col>
        <Col lg={2} md={3} sm={3} md={6} className="box_admsn" style={{marginTop:"30px"}}><div style={{fontSize:"22px",fontWeight:"500"}}>Extra Curricular</div><div>Art and craft</div><div>Dance</div><div>Drama</div><div>Music</div><div>Debate</div><div>Picnics and excursions</div></Col>
        <Col lg={2} md={3} sm={3} md={6} className="box_admsn" style={{marginTop:"30px"}}><div style={{fontSize:"22px",fontWeight:"500"}}>Feature Slab</div><div>Mute</div><div>Save</div><div>Unfollow</div><div>Block</div><div>Report</div><div>Delete</div></Col>
        <Col lg={2} md={3} sm={3} md={6} className="box_admsn" style={{marginTop:"30px"}}><div style={{fontSize:"22px",fontWeight:"500"}}>Boarding </div><div>Boys hostel</div><div>Girls hostel</div><div>***</div><div>***</div><div>***</div><div>***</div></Col>
        <Col lg={2} md={3} sm={3} md={6} className="box_admsn" style={{marginTop:"30px"}}><div style={{fontSize:"22px",fontWeight:"500"}}>Safety and Security</div><div>CCTV</div><div>GPS bus tracking</div><div>Student tracking app</div><div>School security</div><div>***</div><div>***</div></Col>
        <Col lg={2} md={3} sm={3} md={6} className="box_admsn" style={{marginTop:"30px"}}><div style={{fontSize:"22px",fontWeight:"500"}}>Disabled Friendly</div><div>Ramps</div><div>Washrooms</div><div>Elevator</div><div>***</div><div>***</div><div>***</div></Col>
      </Row>
    </div>
    </div>
  <div className="land_abt_school">
    <div style={{fontSize:"25px",fontWeight:"500",color:"#8C30F5"}}>Apply Online</div>
    </div>
  </div>
  </div>
  </div>);
}
export default Admission;