import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import Principal from "../Images/principal.jpg";
import People1 from "../Images/people1.png";
import People2 from "../Images/people2.png";
import People3 from "../Images/people3.png";
import People4 from "../Images/people4.png";
import Tour from "../Images/tour.jpeg";
import { Link } from "react-router-dom";
function People()
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
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/schoolestore">Schoolestore</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/jobs">Jobs</Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav1"><Link style={{textDecoration:"none",color:"black"}} to="/School/people">People</Link></Col> 
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
  <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>Principal</div>
    <Row>
    <Col lg={4} md={4} sm={4} xs={12}>
        <img src={People1} className="img_principal"/> 
    </Col>
    <Col lg={8} md={8} sm={8} xs={12}>     
        <div style={{fontSize:"30px",fontWeight:"500"}}>Abhinav Singh</div> 
    <div style={{fontSize:"22px"}}>
B.Tech. (Computer Science) <br/><br/>

PGDBM - Marketing<br/>
IMT <br/>
Ghaziabad, India</div>
</Col>
</Row>
  </div>
  <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>School Board Member</div>
    <Row>
    <Col lg={4} md={4} sm={4} xs={12}>
        <img src={People2} className="img_principal"/> 
    </Col>
    <Col lg={8} md={8} sm={8} xs={12}>     
        <div style={{fontSize:"30px",fontWeight:"500"}}>Susan Holmes</div> 
    <div style={{fontSize:"22px"}}>
B.A. (Hons.) English and German University of Liverpool, U.K.<br/><br/><br/>
M.A. Education University of Leicester, U.K.<br/><br/><br/>
Post Graduate Certificate in Education, Birmingham University, U.K.<br/><br/><br/>
National Professional Qualification for Headship National College for Teaching and Leadership, U.K.</div>
</Col>
</Row>
  </div>  
  <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>School Board Member</div>
    <Row>
    <Col lg={4} md={4} sm={4} xs={12}>
        <img src={People3} className="img_principal"/> 
    </Col>
    <Col lg={8} md={8} sm={8} xs={12}>     
        <div style={{fontSize:"30px",fontWeight:"500"}}>    Dr Suhasini Kanwar</div> 
    <div style={{fontSize:"22px"}}>
B.A. (Hons.) English<br/>M.A. English Literature<br/>Lady Sri Ram College<br/>Delhi University<br/><br/>
P.G.D.E.L.<br/>IDISCOVERI &<br/>University of Cambridge<br/>United Kingdom</div>
</Col>
</Row>
  </div>  
  <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>School Board Member</div>
    <Row>
    <Col lg={4} md={4} sm={4} xs={12}>
        <img src={People4} className="img_principal"/> 
    </Col>
    <Col lg={8} md={8} sm={8} xs={12}>     
        <div style={{fontSize:"30px",fontWeight:"500"}}>    Sonal Anand Singh</div> 
    <div style={{fontSize:"22px"}}>
B.A. (Hons.) Political Science<br/><br/>Hindu College<br/>University of Delhi<br/><br/><br/>M.A. International Relations<br/>University of Warwick<br/>United Kingdom</div>
</Col>
</Row>
  </div>  
  </div>
  </div>
  </div>);
}
export default People;