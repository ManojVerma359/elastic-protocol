//  import React from "react";
import React, { useState } from "react";
import { Container, nav, Row, Col } from "react-bootstrap";
import navlogo from "../assets/images/navlogo.png";
import robot from "../assets/images/robotimg.png";
import { Navicons } from "./Iconsvgimge";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="hero_bgim">
        <Container>
          <div className="mycontainer ">
            <nav className=" z-3" data-aos="zoom-in-up">
              <Container className=" d-flex align-items-center justify-content-between">
                <div>
                  <a href="">
                    <img className="" src={navlogo} alt="#id" />
                  </a>
                </div>
                <div className=" d-flex align-items-center flex-xl-row flex-column gap-5  me-lg-0 z-3">
                  <ul className={show ? "open" : ""}>
                    <li>
                      <a
                        href="#About"
                        className="ff-ralway fs-16 fw-500 text-white position-relative hover-line"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Ibo"
                        className="ff-ralway fs-16 fw-500 text-white position-relative hover-line"
                      >
                        IBO Event
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Eefi"
                        className="ff-ralway fs-16 fw-500 text-white position-relative hover-line"
                      >
                        EEFI Tokenomics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Team"
                        className="ff-ralway fs-16 fw-500 text-white position-relative hover-line"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Partners"
                        className="ff-ralway fs-16 fw-500 text-white position-relative hover-line"
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Roadmap"
                        className="ff-ralway fs-16 fw-500 text-white position-relative hover-line"
                      >
                        Roadmap
                      </a>
                    </li>
                    <li className="py-lg-5 ">
                      {" "}
                      <select
                        name="cars"
                        id="cars"
                        className="border-none outline-none bg-transparent text-white ff-ralway fw-500  leading-normal"
                      >
                        <option
                          className="bg-transparent border-none ff-ralway"
                          value="More"
                        >
                          More
                        </option>
                        <option
                          className="bg-transparent ff-ralway text-black"
                          value="contact"
                        >
                          Contc
                        </option>
                        <option
                          className="bg-transparent ff-ralway text-black"
                          value="faqs"
                        >
                          Faqs
                        </option>
                        <option
                          className="bg-transparent ff-ralway text-black"
                          value="feedback"
                        >
                          Feed
                        </option>
                      </select>
                    </li>
                    <button className="enterbtn1 color-1 ff-ralway fs-16 fw-500 d-block d-xl-none">
                      Enter App
                    </button>
                  </ul>

                  <div className="ml-120 d-flex align-items-center justify-content-between">
                    <button
                      className="open d-block d-xl-none navicon z_index navi "
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      <Navicons />
                    </button>
                    <button className="enterbtn color-1 ff-ralway fs-16 fw-500 d-none d-md-block ms-5">
                      Enter App
                    </button>
                  </div>
                </div>
              </Container>
            </nav>

            <Container>
              <div className="mycontainer">
                <Row>
                  <Col
                    lg={6}
                    className="pt-170 justify-content-center align-items-center"
                  >
                    <h2 className="fs-85 fw-500 ff-nue text-white text-uppercase">
                      Building{" "}
                      <span className="fs-85 fw-500 ff-nue text-white d-md-block text-uppercase">
                        elastic
                      </span>{" "}
                      Protocol
                    </h2>
                    <p className="fs-16 fw-400 ff-ralway text-white text-capitalize">
                      An ecosystem of unique yield strategies that help you earn
                      yield, amplify, and stretch it across all market
                      conditions
                    </p>
                    <p className="fs-18 fw-700 ff-ralway text-white">
                      Audited by Omniscia
                    </p>
                    <hr className="paraline" />
                  </Col>
                  <Col lg={6}>
                    <img className="w-100 robot" src={robot} alt="#" />
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Container>{" "}
      </div>{" "}
    </>
  );
};

export default Header;
<li className="py-5 ">
  {" "}
  <select
    name="cars"
    id="cars"
    className="border-none outline-none bg-transparent text-white ff-ralway fw-500  leading-normal"
  >
    <option className="bg-transparent border-none ff-ralway" value="More">
      More
    </option>
    <option className="bg-transparent ff-ralway text-black" value="contact">
      Contc
    </option>
    <option className="bg-transparent ff-ralway text-black" value="faqs">
      Faqs
    </option>
    <option className="bg-transparent ff-ralway text-black" value="feedback">
      Feed
    </option>
  </select>
</li>;
