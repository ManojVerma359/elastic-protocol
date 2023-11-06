import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className="contact_bgimg">
        <Container>
          <div className="mycontainer">
            <h2 className="fs-46 fw-700 ff-nue text-white text-center pt-82">
              Contact Us
            </h2>
            <p className="fs-16 fw-400 ff-ralway have text-center">
              Have a question or want to contribute? Reach out to us.
            </p>
            <Row>
              <Col md={6}>
                <div className="pt-64 w-100">                
                  <input  type="text" className="fs-16 fw-400 ff-ralway text-white  w-100  types first py-3"  placeholder="First Name" />                  
                </div>
              </Col>
              <Col md={6}>
              <div className="pt-64 w-100 ">                
                  <input  type="text" className="fs-16 fw-400 ff-ralway text-white  w-100  types first py-3"  placeholder="Last Name" />                  
                </div>
              </Col>
            
              <Col md={6}>
                <div className="pt-50 w-100">
                <input  type="text" className="fs-16 fw-400 ff-ralway text-white  w-100  types first py-3"  placeholder="Email" /> 
                 
                </div>
              </Col>
              <Col md={6}>
                <div className="pt-50 w-100">
                <input  type="number" className="fs-16 fw-400 ff-ralway text-white  w-100  types first py-3"  placeholder="Phone Number" />          
                </div>
              </Col>
            </Row>
          <div className="pt-50 w-100">
          <textarea type="text" className="fs-16 fw-400 ff-ralway text-white  pb-5 types first w-100 py-3" placeholder="Message"/>
          </div>
             
         
           
           <div className="d-flex justify-content-center pt-50 pb-110">
           <button className="fs-20 fw-500 ff-ralway text-center border-0 submitbtn ">
              SUBMIT'
            </button>
           </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
