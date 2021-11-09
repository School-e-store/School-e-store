import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./Booksellerstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AI from "../Images/AI.jpg";
import BBP from "../Images/BBP.jpg";
import BP from "../Images/BP.jpg";
import DAV from "../Images/DAV.jpg";
import DP from "../Images/DP.jpg";
import GT from "../Images/GT.jpg";
import HC from "../Images/HC.jpg";
import IP from "../Images/IP.jpg";
import KP from "../Images/KP.jpg";
import KRM from "../Images/KRM.jpg";
import NW from "../Images/NW.jpg";
import PAR from "../Images/PAR.jpg";
function Booksellerfeature1()
{
  return ( <div style={{backgroundColor:"#F1E4FF", paddingBottom:"50px"}}> 
  <h1 style={{paddingLeft:"80px"}}>Listed schools</h1>
  <div style={{textAlign:"center"}}>
  <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"10px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={AI} />
    <Card.Title className="cardTit">BALDEV ACADEMY</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={BBP} />
  <Card.Title className="cardTit">CITY MONTESSORI SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={BP} />
  <Card.Title className="cardTit">GLOBAL SCHOOL OF LEARNING</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={DAV} />
  <Card.Title className="cardTit">GREEN FIELD ACADEMY</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={DP} />
  <Card.Title className="cardTit">GREEN LAND PUBLIC SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={GT} />
  <Card.Title className="cardTit">GREEN LAND PUBLIC SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    KAISERGANJ
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={HC} />
  <Card.Title className="cardTit">KIDS KINGDOM SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={IP} />
  <Card.Title className="cardTit">NKM PUBLIC SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={KP} />
  <Card.Title className="cardTit">NESFIELD CHILDREN ACADEMY</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={KRM} />
  <Card.Title className="cardTit">NEW WAY PUBLIC SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={NW} />
  <Card.Title className="cardTit">PATHSHALA PUBLIC SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ✔️
    </p>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={PAR} />
  <Card.Title className="cardTit">SAGAR NURTURE INTERNATIONAL SCHOOL</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    LUCKNOW
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
    <br/>
    <p style={{fontSize:"larger"}}> 
    Book set ✔️
    </p>
    <p style={{fontSize: "larger"}}> 
    Stationary set ❌
    </p>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  {/* <Button variant="outline-dark" size="lg" style={{marginLeft:"auto",marginTop:"20px",marginBottom:"20px"}} className="button">Explore all →
      {/* <Link to="/login">Log-In</Link> */}
    {/* </Button>  */}
</div>
</div>)
}
export default Booksellerfeature1;