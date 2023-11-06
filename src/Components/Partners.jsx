import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import partimg1 from "../assets/images/partimg1.png";
import partimg2 from "../assets/images/partimg2.png";
import partimg3 from "../assets/images/partimg3.png";
import partimg4 from "../assets/images/partimg4.png";
import partimg5 from "../assets/images/partimg5.png";
import partimg6 from "../assets/images/partimg6.png";

const Partners = () => {
  return (
    <>
      <Container className="mt-200">
        <div className="fs-46 fw-700 partner ff-nue text-center">
          Ecosystem Partners
        </div>
        <div className="mycontainer">
          <Row className="pt-64 justify-content-center">
            <Col lg={4} sm={6}>
              <a href="#id"><img className="w-100 img_hover" src={partimg1} alt="#id" /></a>
            </Col>
            <Col lg={4} sm={6}>
              <a href="#id"><img className="w-100 img_hover" src={partimg2} alt="#iid" /></a>
            </Col>
            <Col lg={4} sm={6} className="pt-3 pt-lg-0">
              <a href="#id"><img className="w-100 img_hover" src={partimg3} alt="#id" /></a>
            </Col>
            <Col lg={4}sm={6} className="pt-3">
              <a href="#id"><img className="w-100 img_hover" src={partimg4} alt="#id" /></a>
            </Col>
            <Col lg={4} sm={6} className="pt-3">
              <a href="#id"><img className="w-100 img_hover" src={partimg5} alt="#iid" /></a>
            </Col>
            <Col lg={4} sm={6} className="pt-3">
              <a href="#id"><img className="w-100 img_hover" src={partimg6} alt="#id" /></a>
            </Col>
          </Row>
<div className="d-flex justify-content-center align-items-center pt-70 pb-110">
<button className="announcedbtn fs-16 fw-600 ff-ralway ">More To Be Announced</button>
</div>
        </div>
      </Container>
    </>
  );
};

export default Partners;
