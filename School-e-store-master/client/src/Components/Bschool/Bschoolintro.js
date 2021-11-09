import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Bschoolstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import SPURP from "../Images/SPURP.png";
function Bschoolintro()
{
  return (<div>  
  {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
   {/* <h3 >About Us</h3> */}
    <Row className="p-0 m-0">
        <Col 
        lg={7} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"50px" , paddingBottom:"80px" , paddingLeft:"200px" , width: "1100px"}}>
        <Card style={{alignItems: "center" ,border: "none"}}>
        <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , paddingBottom:"20px"}} >List of top 15 best schools in Delhi</Card.Title>
    <Card.Img variant="top" src={SPURP} style={{height: "400px" ,width: "900px"}}/>
    <Card.Body>
      <Card.Text style={{ paddingTop: "10px"}}>
      The right decision in terms of choosing your child’s school can pay massive 
      dividends later in their life. The decision does not guarantee success, 
      it is a stepping stone in the right direction. Check out this list to find the best 
      school for your child and do your due research as well.
      </Card.Text>
     
    </Card.Body>
  </Card>
        </Col>
    </Row>
   </div>);
}
export default Bschoolintro;
