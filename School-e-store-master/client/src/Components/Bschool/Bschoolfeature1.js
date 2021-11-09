import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./Bschoolstyles.css";
import Block from "../Images/block.png";
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
import SAJ from "../Images/SAJ.jpg";
import STA from "../Images/STA.jpg";
import USG from "../Images/USG.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
function Bschoolfeature1()
{
  return ( <div style={{backgroundColor:"#F1E4FF", paddingBottom:"50px"}}> 
  {/* <h1 style={{paddingLeft:"80px"}}>Listed schools</h1> */}
  <div style={{textAlign:"center"}}>
  <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"10px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>KR Mangalam School</Card.Title>
  <img className="feature_img" src={KRM } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Sector 6, Plot No 11, Naale Wali Gali, near Arogya Hospital, Vaishali Extension, Ramprastha Greens, Vaishali, Ghaziabad, Uttar Pradesh 201012
    </p>
    The aim of the K R Mangalam World School, Vaishali is the holistic 
    development of the students so as to enable them to attain the targets 
    they have set for themselves. With a keen focus on both the academic and 
    co-scholastic domains, KR Mangalam School aims to enable our students to identify 
    their talents and use these to be successful in their chosen fields. Experiential 
    learning and project-based activities ensure that the students can relate academics to life. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Parevartan School</Card.Title>
  <img className="feature_img" src={PAR } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-Educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Khasra No. 540 & 544, Noor Nagar Main Road, NH-58, Tyagi Chowk, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003
    </p>
    The Parevartan faculty has a motto of "Raising a Different League". 
    Parevartan is a CBSE-affiliated secondary school. They instill wisdom 
    through experiential learning. Today Parevartan is more than a school 
    that provides education; it is a place where the most powerful dreams
     take shape in the form of self-inspired individuals. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Nehru World School</Card.Title>
  <img className="feature_img" src={NW} style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE, IGCSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: E Block, Shastri Nagar, Ghaziabad Ghaziabad 201002
    </p>
    NWS is committed to the holistic development of each student. To 
    that end, the School aims to develop a curious mind to question, 
    explore, discover, evaluate, analyse, synthesise and reflect, enabling each student to 
    consistently make their best better to achieve
     the highest academic standards of which they are capable. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Gurukul The School</Card.Title>
  <img className="feature_img" src={GT } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: NH-9, 28kms Delhi Milestone, Ghaziabad, Uttar Pradesh 201015
    </p>
    Gurukul The School believes that education not only follows but also contributes
     to social change. Their goal is to educate the child and influence the home. 
     They live out this faith through transforming their belief in a school culture t
     hat reflects their words. Gurukul is a school with an international outlook 
     focusing on Global Trends and 
    Traditional Indian Values empowering young learners to become world citizens. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Bal Bharti Public School</Card.Title>
  <img className="feature_img" src={BBP } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Post Office, Block A, Chander Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011
    </p>
    Covering an area of 5.25 acres, Bal Bharati Public School, 
    Brij Vihar, with its state of the art infrastructure and aesthetically 
    beautiful environs, has since its inception, constantly endeavoured to provide to 
    its students a congenial learning environment in which modern ideas and views have 
    thrived alongside the traditions and customs of India’s rich cultural heritage. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Uttam School for Girls</Card.Title>
  <img className="feature_img" src={USG } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Girls Only
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: B Block, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002
    </p>
    Happy classrooms that lay the foundation for a meaningful value-centric
     education are the hallmark of Uttam School. They promote a culture of
      independent thinking in a safe and unconstrained environment. Here, each child matters 
    and is encouraged to build upon her strengths at her own pace.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>St. Paul’s Academy</Card.Title>
  <img className="feature_img" src={STA } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: ICSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Sector 9, Raj Nagar, near Central Park, Ghaziabad, Uttar Pradesh 201002
    </p>
    This institution aims to impart integral education to the youth to 
    enable them to find their proper places in society. Intellectual education 
    is sought to be given by way of a course of studies that is suited to the 
    mental development of the students. The choice of the course of 
    studies is governed by the consideration that it serves as a solid foundation for higher studies.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Delhi Public School</Card.Title>
  <img className="feature_img" src={DP } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: IB
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: DPSG School, Site 3, Meerut Rd Industrial Area, Ghukna, Ghaziabad, Uttar Pradesh 201001
    </p>
    DPSG provides ample opportunities to our children so that they develop the self-belief,
     courage and determination to pursue their dreams. Working collaboratively to ensure 
     that each student reaches the pinnacle of success and glory. Consistently empowering 
     and inspiring students to reach the zenith of excellence. DPSG has created a tradition of 
     excellence by churning out feel-good success stories year after year.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Bhagirath Public School</Card.Title>
  <img className="feature_img" src={BP } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Block B, Sector 23, Sanjay Nagar, Ghaziabad, Uttar Pradesh 201001
    </p>
    Carrying a Legacy of forty-four years, BPS is dedicated to education and 
    has emerged as one of the finest Educational institutions in NCR, which is
     spread over an area of one acre. It is governed by a board comprising of 
     distinguished academicians, retired bureaucrats, and eminent citizens, 
      strives to attain a society where children from 
    underprivileged families get a fair chance to live life to the fullest.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Khaitan Public School</Card.Title>
  <img className="feature_img" src={KP } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Ganga Banquet Rd, Sector 5, Rajendra Nagar, Sahibabad, Ghaziabad, Uttar Pradesh 201005
    </p>
    Their Mission is to empower children, to discover the leader in 
    , making them productive citizens, committed to bring about 
    humanitarian changes in the world. The school aims to enable the students
     to soar high – morally, socially, and spiritually. KPS is a fully accomplished 
     CBSE school in Ghaziabad that provides to its students, high standards of learning through 
    its committed and updated faculty and global infrastructure. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Amity International School</Card.Title>
  <img className="feature_img" src={AI } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Sector 4, Sector 6, Vasundhara, Ghaziabad, Uttar Pradesh 201012
    </p>
    Amity aims to nurture children who are compassionate, respectful, 
    caring, and loving. It also aims to instill in them a scientific 
    temper and global perspective, harness entrepreneurship, and life 
    skills nourish ethical leadership and humanitarian endeavors by introducing 
    them to the knowledge from the world over. With this mission and vision, they
     aim to nurture children who grow up to be responsible and happy, for only happy
      children make for a happy family, a happy society,
     a happy country that will make for a happy and peaceful world.  
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Indirapuram Public School</Card.Title>
  <img className="feature_img" src={IP } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: No.6 II, Nyay Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014
    </p>
    The School upholds a vision to maintain a sharp focus on the 
    pursuit of attaining the highest academic standards. The school aims 
    at holistic development of the personality of its students by creating 
    an understanding and appreciation of India’s 
    rich culture and a sense of integrity, ethics, and honesty.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Holy Child</Card.Title>
  <img className="feature_img" src={HC } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: ICSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Girls only
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: Ashok Nagar Road Ashok Nagar, Block A, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001
    </p>
    This institute of the Sisters of Charity from the beginning has 
    developed a profound consciousness that education of the youth is a vital 
    component of the society. Its foundress St. Bartholomea Capitanio held youth
     "very dear to her heart" and committed herself wholeheartedly to their 
     personal growth and development so that they would become agents of change for a just society. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>Seth Anandram Jaipuria School</Card.Title>
  <img className="feature_img" src={SAJ } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address:  Block B, Sector 14, Vasundhara, Ghaziabad, Uttar Pradesh 201012
    </p>
    Seth Anandram Jaipuria School’s philosophy to “Empower, Enthuse, Excel” 
    goes very well with the ideologies of their intrinsic commitment to 
    provide 21st-century skills. The school envisages the collaboration 
    of a dynamic education system that is innovative, diverse and 
    compassionate towards providing lifelong learning. They intend to 
    go beyond the books by creating a society of learners who are being 
    constantly challenged by teachers as well as their 
    peers so that they outshine in every aspect of their life.
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>

  <Col style={{display:"flex",justifyContent:"space-around"}} lg={12} md={12} sm={12} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px" , width:"1000px" , textAlign: "center"}}>
  <Card.Body>
  {/* <img className="feature_img" src={Block} /> */}
  <Card.Title className="cardTit" style={{fontWeight:"1000" , fontSize: "xx-large" , marginLeft:"20px" , textAlign: "left"}}>D. A. V. Public School</Card.Title>
  <img className="feature_img" src={DAV } style={{height:"200px" , width:"200px" }}/>
    <Card.Text style={{paddingLeft:"20px" , textAlign: "left"}}>
    <br/>
  <Button variant="outline-dark" size="md" className="custom_but1" style={{marginBottom:"20px"}} >Apply Now
    </Button>
    <br/>
    <Button variant="outline-dark" size="md" className="custom_but1" >Send Admission Enquiry
    </Button>
    <br />
    <p style={{fontSize:"larger" , paddingTop:"10px" }}> 
    Board: CBSE
    </p>
    <p style={{fontSize: "larger" }}> 
    Type: Co-educational
    </p>
    <p style={{fontSize:"larger" }}> 
    Address: P-Block, Sector 12, Advocate Colony, Pratap Vihar, Ghaziabad, Uttar Pradesh 201001
    </p>
    D.A.V. stands for Faith in the eternal values of Vedic culture and studies. 
    The school is committed to academic excellence, art, athletics and 
    intellectual growth of the students. It also aims at inculcating strong 
    moral and social values in the students.  D.A.V. Public School, 
    Ghaziabad (U.P.) was established in April 1984 under D.A.V. College Managing Committee, 
    Chitragupta Road, New Delhi with 60 students and 7 teachers.
     Today it has its own magnificent spacious building spread over an area 
     of 10 acres with Facilities for academics, games and sports. 
    It has about 4600 students and staff spanning over 250. 
    {/* <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div> */}
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  </Row>
</div>
</div>)
}
export default Bschoolfeature1;
