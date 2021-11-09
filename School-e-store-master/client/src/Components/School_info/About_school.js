import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import Principal from "../Images/principal.jpg";
import Tour from "../Images/tour.jpeg";
import { Link } from "react-router-dom";
function Land_pg()
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
    <Col lg={2} md={2} sm={4} className="land_nav1"><Link style={{textDecoration:"none",color:"black"}} to="/School">About school </Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/admission">Admission</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/schoolestore">Schoolestore</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/jobs">Jobs</Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/people">People</Link></Col> 
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
    <Row className="p-0 m-0">
        <Col lg={6} md={6} sm={6} xs={12} style={{display:"flex",justifyContent:"space-around"}}>
        <div className="land_detail1">
            <div style={{fontSize:"20px"}}>Affiliated to : </div>
            <div style={{fontSize:"25px",fontWeight:"bold"}}>CBSE</div>
        </div>    
        </Col>
        <Col lg={6} md={6} sm={6} xs={12} style={{display:"flex",justifyContent:"space-around"}}>
        <div className="land_detail1">
            <div style={{fontSize:"20px"}}>Avg Monthly Fees: </div>
            <div style={{fontSize:"25px",fontWeight:"bold"}}> ₹10433 TO ₹14933</div>
        </div>    
        </Col>
    </Row>
    <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>School Brief</div>
    <div style={{fontSize:"18px"}}>The future of our complex and constantly changing world is in the hand of today’s students—tomorrow’s leaders.
 
 Nehru World School provides students with an international and exciting educational experience that is designed to help them become caring, thoughtful, principled, and well-balanced human beings. Students have the opportunities to learn to communicate effectively, become technologically literate, and take risks in a supportive environment.
 ​
 Nehru World School, established in 1978, is an English medium co-educational school that is affiliated with the Central Board of Secondary Education (C.B.S.E.) and Cambridge International. It is the beginning of a lifelong adventure known as learning. The School nurtures a spirit that fosters children’s natural inquisitiveness and delight in learning.
 </div>
    </div>
    <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>Vision</div>
    <div style={{fontSize:"18px"}}>Striving for excellence today, prepare students to embrace the opportunities and challenges they may encounter tomorrow.
    </div>
    </div>
    <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>Mission</div>
    <div style={{fontSize:"18px"}}>Nehru World School is committed to creating and maintaining a safe, trusting, and caring environment where teaching and learning are exciting and students embark on a lifelong journey of learning.
 
 All aspects of the school's organization, curricular, and co-curricular activities are child-centered and designed to accommodate individual learning styles so that all may experience success.
  
 The mission of Nehru World School is to help students acquire the knowledge, skills, and attitudes necessary to become happy, healthy, well-adjusted, productive citizens, of the world.
 </div>
    </div>
    <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>Principal</div>
  <Row>
    <Col lg={3} md={4} sm={4} xs={12}><img src={Principal} className="img_principal"/></Col>
    <Col lg={9} md={8} sm={8} xs={12}><div style={{fontSize:"18px",float:"right"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem tortor, vitae, aenean eget sed bibendum eu. Egestas enim viverra tristique sed nisl tempor, a, ultricies elit. Nunc eget eget pulvinar eu mattis nisi. Vel id commodo tincidunt tempus eu posuere nibh neque, sed. Sit sapien et diam in quis consectetur lectus morbi pellentesque. At purus lorem aliquam tincidunt eu nulla facilisis nunc a. Nunc arcu dignissim ultrices sed vulputate. Nulla nibh viverra egestas massa. Est eros sodales fringilla sit lacus sed amet orci sed. Mauris ut ante pulvinar id arcu tristique sapien dignissim nunc. Tincidunt dictumst iaculis pulvinar lacinia dui, mattis sed. A sed pretium tincidunt tincidunt nulla dui urna vehicula viverra. Non sem massa morbi odio. Diam nec lorem mauris lacus, leo. Aliquam elementum iaculis euismod ornare eu. Ac tellus sed ullamcorper vel tincidunt congue.</div>
</Col>
  </Row>
    </div>
    <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>Virtual Tour</div>
    <Row className="m-0 p-0">
      <Col lg={3} md={3} sm={6} xs={6}><img src={Tour} className="land_tour"/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></Col>
      <Col lg={3} md={3} sm={6} xs={6}><img src={Tour} className="land_tour"/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></Col>
      <Col lg={3} md={3} sm={6} xs={6}><img src={Tour} className="land_tour"/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></Col>
      <Col lg={3} md={3} sm={6} xs={6}><img src={Tour} className="land_tour"/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></Col>
    </Row>
    </div>
    <div className="land_abt_school">
    <div style={{fontSize:"30px",fontWeight:"700",color:"#8C30F5"}}>Map</div>
    </div>
  </div>
  </div>
  </div>);
}
export default Land_pg;