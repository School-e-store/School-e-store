import React from "react";
import Button from 'react-bootstrap/Button';
import "./style_school_info.css";
import Back_img from "../Images/back_img.jpg";
import IITD from "../Images/IITD.png";
import { Row,Col } from "react-bootstrap";
import Principal from "../Images/principal.jpg";
import Tour from "../Images/tour.jpeg";
import { Link } from "react-router-dom";
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
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School">About school </Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/admission">Admission</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/schoolestore">Schoolestore</Link></Col>
    <Col lg={2} md={2} sm={4} className="land_nav1"><Link style={{textDecoration:"none",color:"black"}} to="/School/jobs">Jobs</Link></Col>   
    <Col lg={2} md={2} sm={4} className="land_nav"><Link style={{textDecoration:"none",color:"black"}} to="/School/people">People</Link></Col> 
    </Row> 
    </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
  <div className="land_detail">
  <div className="land_abt_school">
    <div style={{fontSize:"28px",fontWeight:"500"}}>Jobs</div>
    <div style={{fontSize:"18px"}}>Nehru World School Ghaziabad invites applications from well-qualified, passionate and inspirational people, who will ensure high-quality learning experiences for our children. We work together as a team and keep developing our skills continuously through our professional development programmes. Incase our teacher profile and our Continuing Professional Development and Learning programme excites you, please write to us on:
<br/><br/>
Apply Online: jobs@nehruworldschool.com
<div className="land_contact_but" style={{display:"flex",flexDirection:"row-reverse"}}>
    <Button variant="outline-dark" size="lg" className="custom_but1" style={{marginRight:"30px"}}>Apply Now
    {/* <Link to="/login">Log-In</Link> */}
    </Button>
    </div> 

</div>
    </div>
  <div className="land_abt_school">
    <div style={{fontSize:"28px",fontWeight:"500"}}>Competetion and events</div>
    <div style={{fontSize:"20px",fontWeight:"500",marginTop:"5px",marginBottom:"5px"}}>CREÒ INTERNATIONAL 2021</div>
    <div style={{fontSize:"18px"}}>

NWS has successfully hosted CREÒ, a creative and literary arts festival for 9 years now. We are overwhelmed with the responses for the current year’s participation with 96 schools and 1556 participants thereby building learning opportunities and global awareness amongst unique learning communities.
<br/>​<br/>
CREÒ International 2021 includes 30 events in total, some taking place online and some offline for students aged 3 to 17. To list events in the fields of Fine Arts, Public Speaking, Science and Technology, Photography, Literature and Performing Arts giving you a flavour of the wide appeal to many different students. Every participant will be a winner and certificates will be awarded according to the performance criteria.
​<br/><br/>
For further information or queries, please contact:<br/>
Mr Sudhir Rana (Creative Head)<br/>
7840876111<br/>
sudhir.rana@nehruworldschool.com

</div>
    </div>
  </div>
  </div>
  </div>);
}
export default Jobs;