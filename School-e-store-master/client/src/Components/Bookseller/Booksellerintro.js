import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Booksellerstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import BOOKSELLER from "../Images/BOOKSELLER.jpg";
function Booksellerintro()
{
  return (<div>  
  {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
   {/* <h3 >About Us</h3> */}
    <Row className="p-0 m-0">
        <Col lg={7} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"100px" , paddingBottom:"80px"}}>
          <Card  style={{ width: '25rem' ,border: "none"}}>
  <Card.Body>
    <Card.Title style={{fontWeight:"1000" , fontSize: "xx-large"}} >Scholar's Shoppe (Indiranagar)</Card.Title>
    <Card.Subtitle  style={{color:"turquoise" , paddingBottom: "20px" ,fontSize: "larger" }}>Lucknow</Card.Subtitle>
    <Card.Text>
    Ground Floor, S-5, 76/77, Gandhi Market,
St Domnic School Road, Bhootnath, Indiranagar,
Lucknow, Uttar Pradesh - 226016

          
    </Card.Text>
    <br/>
    <p style={{fontSize: "larger"}}> 
    Book set ✔️ 
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
    {/* <Card.Link href="#">Enquiry  →</Card.Link> */}
  </Card.Body>
  {/* <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body> */}
</Card>
        </Col>
        <Col 
        lg={3} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"100px" , paddingBottom:"80px"}}>
        <Card style={{alignItems: "center" ,border: "none"}}>
    <Card.Img variant="top" src={BOOKSELLER} style={{height: "200px" ,width: "200px"}}/>
    <Card.Body>
      {/* <Card.Text style={{fontWeight:"550", fontSize: "larger", paddingTop: "10px"}}>
        Admissions open
      </Card.Text> */}
      <br/>
      <Button variant="outline-dark" size="md" className="custom_but1" style={{marginLeft:"20px"}} >Contact us
    </Button>
    </Card.Body>
  </Card>
        </Col>
    </Row>
   </div>);
}
export default Booksellerintro;