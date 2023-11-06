import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teamimg1 from "../assets/images/teamimg1.png";
import teamimg2 from "../assets/images/teamimg2.png";
import teamimg3 from "../assets/images/teamimg3.png";
import { Discord, Twitter, Teamline, Inicon } from "./Iconsvgimge";

const Team = () => {
  return (
    <>
      <div className="" id="team">
        <div className="team_bg ">
          <Container className="custom-container pb-3">
            <div className="pt-5">
              <h3 className="ff-nue fs-46 fw-700 text-white text-center pt-5">
                Our Team
              </h3>
            </div>
            <Row className="mt-5  justify-content-center">
              <Col sm={6} md={4} className="p-lg-4">
                <div className="team-card">
                  <img src={teamimg1} alt="" className="w-100" />
                  <h5 className="ff-ralway fs-24 fw-500 text-black  text-center mb-unset mt-3">
                    Davoice
                  </h5>
                  <p className="ff-ralway fs-16 fw-400 text-black  text-center">
                    co-founder
                  </p>
                  <div className="text-center gap-2 d-flex justify-content-center">
                    <a href="">
                      <Twitter />
                    </a>
                    <Teamline />
                    <a href="">
                      <Discord />
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} className="p-lg-4">
                <div data-aos="fade-down" className="team-card">
                  <img src={teamimg2} alt="" className="w-100" />
                  <h5 className="ff-ralway fs-24 fw-500 text-black  text-center mb-unset mt-3">
                    Solomon Adekale
                  </h5>
                  <p className="ff-ralway fs-16 fw-400 text-black  text-center">
                    co-founder
                  </p>
                  <div className="text-center gap-2 d-flex justify-content-center">
                    <a href="#id">
                      <Twitter />
                    </a>
                    <Teamline />
                    <a href="#id">
                      <Discord />
                    </a>
                    <Teamline />
                    <a href="#id">
                      <Inicon />
                    </a>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} className="p-lg-4">
                <div className="team-card">
                  <img src={teamimg3} alt="" className="w-100" />
                  <h5 className="ff-ralway fs-24 fw-500 text-black  text-center mb-unset mt-3">
                    Anton
                  </h5>
                  <p className="ff-ralway fs-16 fw-400 text-black  text-center">
                    Co-Founder | Lead Developer
                  </p>
                  <div className="text-center gap-2 d-flex justify-content-center">
                    <a href="">
                      <Twitter />
                    </a>
                    <Teamline />
                    <a href="">
                      <Discord />
                    </a>
                    <Teamline />
                    <a href="">
                      <Inicon />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Team;
